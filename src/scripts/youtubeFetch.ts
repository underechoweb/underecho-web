/**
 * Carga videos de YouTube y los muestra en un carousel con modal de reproducción.
 */

import { getPlaylistVideos } from "@/services/youtube.service";
import type { SocialVideo } from "@/types/social-carousel.types";

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function renderVideoCard(video: SocialVideo, index: number): string {
  const title = video.title || `Video ${index + 1}`;
  return `
    <button
      type="button"
      class="youtube-card flex-shrink-0 w-64 md:w-80 snap-center group relative text-left cursor-pointer"
      data-video-id="${escapeHtml(video.videoId)}"
      data-video-title="${escapeHtml(title)}"
      aria-label="Reproducir ${escapeHtml(title)}"
    >
      <div class="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src="${escapeHtml(video.thumbnail)}"
          alt="${escapeHtml(title)}"
          class="w-full h-96 object-cover"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
          <div class="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-8 h-8 text-primary-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  `;
}

export interface YouTubeConfig {
  apiKey: string;
  playlistId: string;
}

export async function loadYouTubeVideos(
  config: YouTubeConfig
): Promise<void> {
  const container = document.getElementById("youtube-carousel-track");
  const loading = document.getElementById("youtube-carousel-loading");
  const empty = document.getElementById("youtube-carousel-empty");
  const carouselWrap = document.getElementById("youtube-carousel-wrap");

  if (!container) return;
  if (!config?.apiKey || !config?.playlistId) {
    loading?.classList.add("hidden");
    empty?.classList.remove("hidden");
    return;
  }

  try {
    const videos = await getPlaylistVideos(config, 12);
    loading?.classList.add("hidden");

    if (videos.length > 0) {
      empty?.classList.add("hidden");
      carouselWrap?.classList.remove("hidden");
      container.innerHTML = videos.map(renderVideoCard).join("");
      initCarouselNav();
      initVideoModal();
    } else {
      empty?.classList.remove("hidden");
    }
  } catch (err) {
    console.error("Error cargando videos de YouTube:", err);
    loading?.classList.add("hidden");
    empty?.classList.remove("hidden");
  }
}

function initCarouselNav(): void {
  const carousel = document.getElementById("youtube-carousel-track");
  const prevBtn = document.getElementById("youtube-carousel-prev");
  const nextBtn = document.getElementById("youtube-carousel-next");
  if (!carousel || !prevBtn || !nextBtn) return;

  const scrollAmount = 280;
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  const updateButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = carousel;
    prevBtn.style.opacity = scrollLeft > 0 ? "1" : "0.3";
    nextBtn.style.opacity =
      scrollLeft < scrollWidth - clientWidth - 10 ? "1" : "0.3";
  };
  carousel.addEventListener("scroll", updateButtons);
  updateButtons();
}

const EMBED_BASE = "https://www.youtube.com/embed/";

function initVideoModal(): void {
  const modal = document.getElementById("youtube-video-modal");
  const iframe = document.getElementById("youtube-video-iframe") as HTMLIFrameElement | null;
  const closeBtn = document.getElementById("youtube-modal-close");
  const backdrop = document.getElementById("youtube-modal-backdrop");

  if (!modal || !iframe) return;

  function openModal(videoId: string): void {
    if (iframe) iframe.src = `${EMBED_BASE}${videoId}?autoplay=1`;
    modal?.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal(): void {
    if (iframe) iframe.src = "";
    modal?.classList.add("hidden");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".youtube-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-video-id");
      if (id) openModal(id);
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  backdrop?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}
