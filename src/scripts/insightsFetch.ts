/**
 * Client-side fetch para insights (noticias y artículos).
 * Se ejecuta en el navegador al cargar la página.
 */

import { supabaseApi } from "@/services/supabaseApi.service";
import {
  mapNewsRowToCard,
  mapArticleRowToCard,
} from "@/services/insightsApiMapper";

type CardItem = {
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  href: string;
  date: Date;
  author: string;
  tag?: string;
};

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function renderCard(item: CardItem): string {
  const imgBlock = item.image
    ? `<div class="w-full h-48 bg-beige-100 rounded-t-lg overflow-hidden">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" 
             class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" />
       </div>`
    : "";

  const tagBlock = item.tag
    ? `<span class="inline-block bg-gold-100 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start">${escapeHtml(item.tag)}</span>`
    : "";

  const metaBlock =
    item.date || item.author
      ? `<div class="flex flex-wrap gap-2 text-sm text-charcoal-400 mb-4">
          ${item.date ? `<time datetime="${item.date.toISOString()}">${formatDate(item.date)}</time>` : ""}
          ${item.author ? `<span>• ${escapeHtml(item.author)}</span>` : ""}
         </div>`
      : "";

  return `
    <article class="bg-beige-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-beige-200 hover:border-gold-300">
      <a href="${escapeHtml(item.href)}" class="block h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-lg">
        ${imgBlock}
        <div class="p-6 flex-grow flex flex-col">
          ${tagBlock}
          <h3 class="text-xl font-bold text-charcoal-700 mb-3 font-serif break-words">${escapeHtml(item.title)}</h3>
          ${item.description ? `<p class="text-charcoal-600 mb-4 line-clamp-3 flex-grow">${escapeHtml(item.description)}</p>` : ""}
          ${metaBlock}
          <span class="inline-block text-gold-600 font-semibold hover:text-gold-700 transition-colors mt-auto">Leer más →</span>
        </div>
      </a>
    </article>
  `;
}

export async function loadInsights(): Promise<void> {
  const noticiasContainer = document.getElementById("insights-noticias-grid");
  const articulosContainer = document.getElementById("insights-articulos-grid");
  const noticiasLoading = document.getElementById("insights-noticias-loading");
  const articulosLoading = document.getElementById("insights-articulos-loading");
  const noticiasEmpty = document.getElementById("insights-noticias-empty");
  const articulosEmpty = document.getElementById("insights-articulos-empty");
  const noticiasMore = document.getElementById("insights-noticias-more");
  const articulosMore = document.getElementById("insights-articulos-more");

  try {
    const [news, articles] = await Promise.all([
      supabaseApi.getNewsList(),
      supabaseApi.getArticleList(),
    ]);

    const newsCards = news.map(mapNewsRowToCard);
    const articleCards = articles.map(mapArticleRowToCard);

    const noticiasOnly = [...newsCards]
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 6);
    const articulosOnly = [...articleCards]
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 6);

    if (noticiasContainer && noticiasLoading && noticiasEmpty) {
      noticiasLoading.classList.add("hidden");
      if (noticiasOnly.length > 0) {
        noticiasEmpty.classList.add("hidden");
        noticiasContainer.classList.remove("hidden");
        noticiasContainer.innerHTML = noticiasOnly.map(renderCard).join("");
        noticiasMore?.classList.remove("hidden");
      } else {
        noticiasEmpty.classList.remove("hidden");
      }
    }

    if (articulosContainer && articulosLoading && articulosEmpty) {
      articulosLoading.classList.add("hidden");
      if (articulosOnly.length > 0) {
        articulosEmpty.classList.add("hidden");
        articulosContainer.classList.remove("hidden");
        articulosContainer.innerHTML = articulosOnly.map(renderCard).join("");
        articulosMore?.classList.remove("hidden");
      } else {
        articulosEmpty.classList.remove("hidden");
      }
    }
  } catch (err) {
    console.error("Error cargando insights:", err);
    noticiasLoading?.classList.add("hidden");
    articulosLoading?.classList.add("hidden");
    noticiasEmpty?.classList.remove("hidden");
    articulosEmpty?.classList.remove("hidden");
  }
}

/** Carga y muestra el listado completo de noticias (para /noticias) */
export async function loadNoticiasList(): Promise<void> {
  const grid = document.getElementById("noticias-list-grid");
  const loading = document.getElementById("noticias-list-loading");
  const empty = document.getElementById("noticias-list-empty");

  try {
    const news = await supabaseApi.getNewsList();
    const cards = news.map(mapNewsRowToCard).sort(
      (a, b) => b.date.getTime() - a.date.getTime(),
    );

    loading?.classList.add("hidden");
    if (cards.length > 0 && grid) {
      empty?.classList.add("hidden");
      grid.classList.remove("hidden");
      grid.innerHTML = cards.map(renderCard).join("");
    } else {
      empty?.classList.remove("hidden");
    }
  } catch (err) {
    console.error("Error cargando noticias:", err);
    loading?.classList.add("hidden");
    empty?.classList.remove("hidden");
  }
}

/** Carga y muestra el listado completo de artículos (para /articulos) */
export async function loadArticulosList(): Promise<void> {
  const grid = document.getElementById("articulos-list-grid");
  const loading = document.getElementById("articulos-list-loading");
  const empty = document.getElementById("articulos-list-empty");

  try {
    const articles = await supabaseApi.getArticleList();
    const cards = articles.map(mapArticleRowToCard).sort(
      (a, b) => b.date.getTime() - a.date.getTime(),
    );

    loading?.classList.add("hidden");
    if (cards.length > 0 && grid) {
      empty?.classList.add("hidden");
      grid.classList.remove("hidden");
      grid.innerHTML = cards.map(renderCard).join("");
    } else {
      empty?.classList.remove("hidden");
    }
  } catch (err) {
    console.error("Error cargando artículos:", err);
    loading?.classList.add("hidden");
    empty?.classList.remove("hidden");
  }
}
