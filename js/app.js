const memoriesData = [
    {
        id: 1,
        title: "Cao Bằng Discovery",
        date: "March 2023",
        image_url: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=500&fit=crop&q=80",
        gallery: [

        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1400&h=900&fit=crop&q=85",
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&h=900&fit=crop&q=85"
    ],
        description:
            "Where the thundering Bản Giốc cascade paints mist across the emerald valley.",
    },
    {
        id: 2,
        title: "Hà Giang Loop",
        date: "October 2023",
        image_url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&h=500&fit=crop&q=80",
        gallery: [
    "https://drive.google.com/thumbnail?id=13dNQ90N_wzaG5uUVk7Y5c9IbzJyoB3x4&sz=w1400",
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1400&h=900&fit=crop&q=85",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&h=900&fit=crop&q=85",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&h=900&fit=crop&q=85"
],
        description:
            "Conquering the Mã Pí Lèng pass, where clouds kiss the mountain's edge.",
    },
    {
        id: 3,
        title: "Đà Lạt Retreat",
        date: "January 2024",
        image_url: "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&h=500&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1555921015-5532091f6026?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1511497584788-876760111969?w=1400&h=900&fit=crop&q=85"
        ],
        description:
            "Pine-scented mornings and café culture nestled in the misty highlands.",
    },
    {
        id: 4,
        title: "Phú Quốc Sunsets",
        date: "April 2024",
        image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1400&h=900&fit=crop&q=85"
        ],
        description:
            "Golden light dissolving into the Gulf of Thailand like liquid amber.",
    },
    {
        id: 5,
        title: "Sa Pa Terraces",
        date: "July 2024",
        image_url: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=500&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1400&h=900&fit=crop&q=85"
        ],
        description:
            "Emerald rice paddies cascading down the mountains like stairways to the clouds.",
    },
    {
        id: 6,
        title: "Ninh Bình Serenity",
        date: "September 2024",
        image_url: "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&h=500&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1573790387438-4da905039392?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1400&h=900&fit=crop&q=85"
        ],
        description:
            "Drifting through limestone karsts where time stands perfectly still.",
    },
    {
        id: 7,
        title: "Huế Heritage",
        date: "December 2024",
        image_url: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=500&fit=crop&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1400&h=900&fit=crop&q=85",
            "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&h=900&fit=crop&q=85"
        ],
        description:
            "Imperial echoes and the gentle perfume of the Hương River at twilight.",
    },
];

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function debounce(fn, ms = 200) {
    let id;
    return (...args) => {
        clearTimeout(id);
        id = setTimeout(() => fn(...args), ms);
    };
}

function centreOf(el, ancestor) {
    let x = 0,
        y = 0,
        node = el;
    while (node && node !== ancestor) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent;
    }
    return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
}

let pathState = null;
let scrollObs = null;
let modalState = {
    open: false,
    tripIdx: 0,
    slideIdx: 0,
    imgs: []
};

function attachImgFade(img) {
    if (img.complete) {
        img.classList.add("loaded");
    } else {
        img.addEventListener("load", () => img.classList.add("loaded"));
        img.addEventListener("error", () => {
            img.style.background = `linear-gradient(135deg, var(--accent-light), var(--sage-light))`;
            img.classList.add("loaded");
        });
    }
}

function renderStops(data, keepVisibleCount = 0) {
    const container = $("#stops");
    container.innerHTML = "";

    data.forEach((mem, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        const num = String(i + 1).padStart(2, "0");
        const count = mem.gallery && mem.gallery.length ? mem.gallery.length : 1;

        const article = document.createElement("article");
        article.className = `stop stop--${side}${i < keepVisibleCount ? " is-visible" : ""}`;
        article.dataset.index = i;

        article.innerHTML = `
      <div class="stop-card" role="button" tabindex="0" aria-label="Open ${mem.title} gallery">
        <div class="card-img-wrap">
          <img
            src="${mem.image_url}"
            alt="${mem.title}"
            loading="lazy"
          >
          <span class="card-badge">${count} Photos ✦</span>
        </div>
        <div class="card-body">
          <span class="card-num" aria-hidden="true">${num}</span>
          <time class="card-date">${mem.date}</time>
          <h3 class="card-title">${mem.title}</h3>
          <p class="card-desc">${mem.description}</p>
        </div>
      </div>
      <div class="stop-connector">
        <span class="connector-line"></span>
        <span class="connector-dot"></span>
      </div>
      <div class="stop-spacer" aria-hidden="true"></div>
    `;

        const card = article.querySelector(".stop-card");
        card.addEventListener("click", () => openModal(i));
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(i);
            }
        });

        container.appendChild(article);
    });

    container.querySelectorAll(".card-img-wrap img").forEach(attachImgFade);
}

function buildModalDOM() {
    const modal = document.createElement("div");
    modal.className = "gallery-modal";
    modal.id = "galleryModal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-top">
                <div class="modal-heading">
                    <time class="modal-date" id="modalDate"></time>
                    <h3 class="modal-title" id="modalTitle"></h3>
                </div>
                <button class="modal-close" id="modalClose" aria-label="Close gallery">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="modal-stage" id="modalStage">
                <button class="slider-btn slider-btn--prev" id="sliderPrev" aria-label="Previous image">
                    <svg viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="slider-track" id="sliderTrack"></div>
                <button class="slider-btn slider-btn--next" id="sliderNext" aria-label="Next image">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="modal-bottom">
                <p class="modal-desc" id="modalDesc"></p>
                <div class="modal-controls-meta">
                    <div class="slider-dots" id="sliderDots"></div>
                    <span class="modal-counter" id="modalCounter"></span>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    $("#modalClose").addEventListener("click", closeModal);
    $("#sliderPrev").addEventListener("click", (e) => {
        e.stopPropagation();
        stepSlide(-1);
    });
    $("#sliderNext").addEventListener("click", (e) => {
        e.stopPropagation();
        stepSlide(1);
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    window.addEventListener("keydown", (e) => {
        if (!modalState.open) return;
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") stepSlide(-1);
        if (e.key === "ArrowRight") stepSlide(1);
    });

    let startX = 0;
    const stage = $("#modalStage");
    stage.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    stage.addEventListener("touchend", (e) => {
        const dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 45) stepSlide(dx < 0 ? 1 : -1);
    }, { passive: true });
}

function openModal(index) {
    const mem = memoriesData[index];
    if (!mem) return;

    const imgs = mem.gallery && mem.gallery.length ? mem.gallery : [mem.image_url];
    modalState = {
        open: true,
        tripIdx: index,
        slideIdx: 0,
        imgs
    };

    $("#modalDate").textContent = mem.date;
    $("#modalTitle").textContent = mem.title;
    $("#modalDesc").textContent = mem.description;

    const track = $("#sliderTrack");
    const dots = $("#sliderDots");
    track.innerHTML = "";
    dots.innerHTML = "";

    imgs.forEach((url, i) => {
        const slide = document.createElement("div");
        slide.className = `slide ${i === 0 ? "is-active" : ""}`;
        slide.innerHTML = `<img src="${url}" alt="${mem.title} — photo ${i + 1}">`;
        attachImgFade(slide.querySelector("img"));
        track.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = `slider-dot ${i === 0 ? "is-active" : ""}`;
        dot.setAttribute("aria-label", `Go to photo ${i + 1}`);
        dot.addEventListener("click", () => goToSlide(i));
        dots.appendChild(dot);
    });

    const showNav = imgs.length > 1;
    $("#sliderPrev").style.display = showNav ? "" : "none";
    $("#sliderNext").style.display = showNav ? "" : "none";
    dots.style.display = showNav ? "" : "none";

    updateSliderUI();
    bindCursorHover($$("#galleryModal button"));

    const modal = $("#galleryModal");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
}

function closeModal() {
    modalState.open = false;
    const modal = $("#galleryModal");
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

function stepSlide(dir) {
    const total = modalState.imgs.length;
    if (total <= 1) return;
    const next = (modalState.slideIdx + dir + total) % total;
    goToSlide(next);
}

function goToSlide(idx) {
    modalState.slideIdx = idx;
    updateSliderUI();
}

function updateSliderUI() {
    const { slideIdx, imgs } = modalState;
    const track = $("#sliderTrack");
    track.style.transform = `translateX(-${slideIdx * 100}%)`;

    $$("#sliderTrack .slide").forEach((s, i) => {
        s.classList.toggle("is-active", i === slideIdx);
    });

    $$("#sliderDots .slider-dot").forEach((d, i) => {
        d.classList.toggle("is-active", i === slideIdx);
    });

    const cur = String(slideIdx + 1).padStart(2, "0");
    const tot = String(imgs.length).padStart(2, "0");
    $("#modalCounter").textContent = `${cur} / ${tot}`;
}

function setupAddJourneyModal() {
    const modal = $("#addJourneyModal");
    const openBtn = $("#openAddModalBtn");
    const closeBtn = $("#closeAddModalBtn");
    const cancelBtn = $("#cancelAddModalBtn");
    const form = $("#addJourneyForm");
    const fileInp = $("#inpFile");
    const fileLabel = $("#fileLabelText");

    function openFormModal() {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        setTimeout(() => $("#inpTitle").focus(), 100);
    }

    function closeFormModal() {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
    }

    openBtn.addEventListener("click", openFormModal);
    closeBtn.addEventListener("click", closeFormModal);
    cancelBtn.addEventListener("click", closeFormModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeFormModal();
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
            closeFormModal();
        }
    });

    fileInp.addEventListener("change", () => {
        const files = fileInp.files;
        if (!files || !files.length) {
            fileLabel.textContent = "Click to choose image files from your device";
        } else if (files.length === 1) {
            fileLabel.textContent = `Selected: ${files[0].name}`;
        } else {
            fileLabel.textContent = `Selected ${files.length} photos`;
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = $("#inpTitle").value.trim();
        const date = $("#inpDate").value.trim();
        const urlVal = $("#inpUrl").value.trim();
        const desc = $("#inpDesc").value.trim();
        const files = Array.from(fileInp.files || []);

        const uploadedUrls = files.map((f) => URL.createObjectURL(f));
        const fallbackUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop&q=80";

        let coverUrl = urlVal || uploadedUrls[0] || fallbackUrl;
        let galleryUrls = [];

        if (urlVal) galleryUrls.push(urlVal);
        if (uploadedUrls.length) galleryUrls.push(...uploadedUrls);
        if (!galleryUrls.length) galleryUrls.push(coverUrl);

        const prevCount = memoriesData.length;

        const newMem = {
            id: prevCount + 1,
            title,
            date,
            image_url: coverUrl,
            gallery: galleryUrls,
            description: desc
        };

        memoriesData.push(newMem);
        renderStops(memoriesData, prevCount);

        form.reset();
        fileLabel.textContent = "Click to choose image files from your device";
        closeFormModal();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                buildSVGPath();
                setupScrollObserver();
                drawPath();
                setupCardTilt();
                bindCursorHover($$(".stop-card"));

                const newStop = $(`.stop[data-index="${prevCount}"]`);
                if (newStop) {
                    newStop.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            });
        });
    });
}

function buildSVGPath() {
    const wrap = $("#journeyWrap");
    const svg = $("#journeySvg");
    const dots = wrap.querySelectorAll(".connector-dot");

    if (dots.length < 2) return;

    svg.querySelectorAll("path").forEach((p) => p.remove());

    const w = wrap.offsetWidth;
    const h = wrap.offsetHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

    const points = Array.from(dots).map((dot) => centreOf(dot, wrap));
    const first = points[0];
    const last = points[points.length - 1];

    const topPad = Math.min(100, first.y);
    let d = `M ${first.x} ${first.y - topPad}`;
    d += ` L ${first.x} ${first.y}`;

    for (let i = 0; i < points.length - 1; i++) {
        const p = points[i];
        const q = points[i + 1];
        const dy = q.y - p.y;
        d += ` C ${p.x} ${p.y + dy * 0.48}, ${q.x} ${q.y - dy * 0.48}, ${q.x} ${q.y}`;
    }

    const botPad = Math.min(100, h - last.y);
    d += ` L ${last.x} ${last.y + botPad}`;

    const glow = document.createElementNS("http://www.w3.org/2000/svg", "path");
    glow.setAttribute("d", d);
    glow.setAttribute("stroke", "url(#pathGrad)");
    glow.setAttribute("stroke-width", "14");
    glow.setAttribute("stroke-linecap", "round");
    glow.setAttribute("fill", "none");
    glow.setAttribute("filter", "url(#pathGlow)");

    const main = document.createElementNS("http://www.w3.org/2000/svg", "path");
    main.setAttribute("d", d);
    main.setAttribute("stroke", "url(#pathGrad)");
    main.setAttribute("stroke-width", "2.5");
    main.setAttribute("stroke-linecap", "round");
    main.setAttribute("fill", "none");

    svg.appendChild(glow);
    svg.appendChild(main);

    const len = main.getTotalLength();
    [main, glow].forEach((p) => {
        p.style.strokeDasharray = len;
        p.style.strokeDashoffset = len;
    });

    pathState = { main, glow, length: len };
}

function setupScrollObserver() {
    if (scrollObs) scrollObs.disconnect();

    scrollObs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add("is-visible");
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    $$(".stop, .scroll-reveal").forEach((el) => scrollObs.observe(el));
}

function setupScrollHandler() {
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                drawPath();
                parallax();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

function drawPath() {
    if (!pathState) return;

    const journey = $("#journey");
    const rect = journey.getBoundingClientRect();
    const vh = window.innerHeight;

    const scrolled = vh - rect.top;
    const total = rect.height + vh;
    const t = Math.max(0, Math.min(1, scrolled / total));

    const offset = pathState.length * (1 - t);
    pathState.main.style.strokeDashoffset = offset;
    pathState.glow.style.strokeDashoffset = offset;
}

function parallax() {
    const y = window.scrollY;
    $$(".h-shape").forEach((shape, i) => {
        const speed = 0.03 + i * 0.018;
        shape.style.transform = `translateY(${y * speed}px)`;
    });
}

function bindCursorHover(elements) {
    const cursor = $("#cursorGlow");
    if (!cursor) return;
    elements.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
}

function setupCursor() {
    const cursor = $("#cursorGlow");
    if (!cursor || "ontouchstart" in window) {
        if (cursor) cursor.style.display = "none";
        document.body.style.cursor = "auto";
        return;
    }

    let cx = 0,
        cy = 0,
        tx = 0,
        ty = 0;

    document.addEventListener("mousemove", (e) => {
        tx = e.clientX;
        ty = e.clientY;
    });

    (function loop() {
        cx += (tx - cx) * 0.13;
        cy += (ty - cy) * 0.13;
        cursor.style.left = cx + "px";
        cursor.style.top = cy + "px";
        requestAnimationFrame(loop);
    })();

    bindCursorHover($$(".stop-card, .add-journey-btn, .modal-close, .slider-btn, .btn-primary, .btn-secondary, .file-drop"));
}

function setupCardTilt() {
    $$(".stop-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            card.style.transform = `
                perspective(900px)
                rotateX(${-y * 6}deg)
                rotateY(${x * 6}deg)
                translateY(-6px)
            `;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3v1nLYcgj3FNYexF4gE0NN-ZyAtX7subJjUG_kMUgP-vtZw4ojfnU-NNfpt-LZxvPQQ/exec";

async function loadImagesFromDrive() {
    try {
        // Thêm timestamp để tránh cache của trình duyệt
        const response = await fetch(`${SCRIPT_URL}?t=${new Date().getTime()}`, {
            method: 'GET',
            redirect: 'follow' // Bắt buộc phải có để tránh lỗi CORS
        });
        
        const images = await response.json();
        
        if (images && images.length > 0) {
            // Lấy danh sách link ảnh đã xử lý
            const driveUrls = images.map(img => img.url);

            // Gán ảnh từ Drive vào album đầu tiên
            memoriesData[0].image_url = driveUrls[0];
            memoriesData[0].gallery = driveUrls;

            // Vẽ lại giao diện web với ảnh mới
            renderStops(memoriesData);
            
            // QUAN TRỌNG: Phải khởi tạo lại các hiệu ứng sau khi renderStops xóa DOM cũ
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    buildSVGPath();         // Vẽ lại đường SVG
                    setupScrollObserver();  // Bật lại hiệu ứng cuộn
                    setupCardTilt();        // Bật lại hiệu ứng nghiêng 3D
                    drawPath();             // Vẽ đường kẻ
                    // Gắn lại hiệu ứng hover cho chuột
                    bindCursorHover($$(".stop-card"));
                });
            });
        }
    } catch (error) {
        console.error("Lỗi khi tải ảnh từ Drive:", error);
    }
}
function init() {
    renderStops(memoriesData);
    buildModalDOM();
    setupAddJourneyModal();
    loadImagesFromDrive();

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            buildSVGPath();
            setupScrollObserver();
            setupScrollHandler();
            setupCursor();
            setupCardTilt();
        });
    });

    window.addEventListener(
        "resize",
        debounce(() => {
            buildSVGPath();
            drawPath();
        }, 280)
    );
}

document.addEventListener("DOMContentLoaded", init);
