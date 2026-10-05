/* Navigation and workspace enhancements. Core toolkit data remains owned by app.js. */
(() => {
  "use strict";

  const pages = [
    {
      id: "home",
      title: "Home",
      description: "Projects, drafts, and a place to begin",
      keywords: "home dashboard start",
    },
    {
      id: "proposal-builder",
      title: "Proposal builder",
      description: "Turn an idea into a practical plan",
      keywords: "write initiative planning",
    },
    {
      id: "pitch-builder",
      title: "Pitch builder",
      description: "Make your idea easy to share",
      keywords: "presentation speech seconds",
    },
    {
      id: "event-checklist",
      title: "Event checklist",
      description: "Keep every detail moving",
      keywords: "tasks check approval event",
    },
    {
      id: "project-dashboard",
      title: "Project dashboard",
      description: "Track projects and their next steps",
      keywords: "manage deadline status",
    },
    {
      id: "reflection-builder",
      title: "Reflection builder",
      description: "Make sense of what you learned",
      keywords: "experience learning reflection",
    },
    {
      id: "templates",
      title: "Resource library",
      description: "Ready-to-adapt templates for your next step",
      keywords: "resources templates favorites",
    },
    {
      id: "impact-log",
      title: "Impact log",
      description: "Record evidence of what changed",
      keywords: "evidence outcomes results",
    },
    {
      id: "communication-generator",
      title: "Communication studio",
      description: "Draft clear messages for your community",
      keywords: "email messages announcements posters communication",
    },
    {
      id: "survey-bank",
      title: "Survey question bank",
      description: "Ask questions that lead to useful feedback",
      keywords: "feedback questionnaires survey",
    },
    {
      id: "case-studies",
      title: "Case studies",
      description: "Explore ideas in different school contexts",
      keywords: "examples inspiration",
    },
    {
      id: "pathway",
      title: "Action pathway",
      description: "Find your next step from idea to reflection",
      keywords: "steps action pathway",
    },
    {
      id: "overview",
      title: "Toolkit overview",
      description: "Meet your student leadership toolkit",
      keywords: "about guide overview",
    },
    {
      id: "framework",
      title: "Leadership framework",
      description: "Build a foundation for thoughtful leadership",
      keywords: "principles framework",
    },
    {
      id: "modules",
      title: "Toolkit modules",
      description: "Explore the tools available to your team",
      keywords: "tools modules",
    },
    {
      id: "context",
      title: "Workspace settings",
      description: "Adapt the toolkit to your school and team",
      keywords: "school context settings customize",
    },
  ];

  const builders = {
    "proposal-builder": "proposal",
    "pitch-builder": "pitch",
    "reflection-builder": "reflection",
    "communication-generator": "communication",
  };

  function startWorkspace() {
    const byId = (id) => document.getElementById(id);
    const sections = Array.from(
      document.querySelectorAll("main > .section[id]"),
    );
    const home = byId("home");
    if (!home || !sections.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const navigation = byId("navLinks");
    const navToggle = document.querySelector(".nav-toggle");
    const backdrop = byId("navBackdrop");
    const dialog = byId("commandDialog");
    const commandInput = byId("commandInput");
    const commandResults = byId("commandResults");
    const availablePages = pages.filter((page) => byId(page.id));
    const pageIds = new Set(availablePages.map((page) => page.id));
    let currentView = "home";
    let lastBuilder = "";
    let commandTrigger = null;
    let afterCommandClose = null;
    let selectedResult = 0;
    let resultButtons = [];
    let resourceShelfSignature = "";
    let projectsSignature = "";
    let resetBotanicalMotion = () => {};

    try {
      lastBuilder =
        sessionStorage.getItem("leadership-workspace:last-builder") || "";
    } catch (_) {
      // Navigation and editing remain usable when browser storage is unavailable.
    }

    const state = () => (typeof appState === "undefined" ? {} : appState);
    const resources = () => state().toolkitData?.resources || [];
    const text = (tag, value, className) => {
      const node = document.createElement(tag);
      node.textContent = value;
      if (className) node.className = className;
      return node;
    };
    const setText = (id, value) => {
      const node = byId(id);
      if (node) node.textContent = value;
    };

    function readRoute(hash = location.hash) {
      let id;
      try {
        id = decodeURIComponent(hash.replace(/^#/, ""));
      } catch (_) {
        return "home";
      }
      if (!id || id === "top") return "home";
      return pageIds.has(id) ? id : "home";
    }

    function closeNavigation(restoreFocus = false) {
      navigation?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
      syncNavigation();
      if (restoreFocus) navToggle?.focus();
    }

    function syncNavigation() {
      const open = Boolean(navigation?.classList.contains("is-open"));
      document.body.classList.toggle("nav-open", open);
      if (backdrop) backdrop.hidden = !open;
      navToggle?.setAttribute("aria-expanded", String(open));
    }

    function rememberBuilder(id) {
      if (!builders[id]) return;
      lastBuilder = id;
      try {
        sessionStorage.setItem("leadership-workspace:last-builder", id);
      } catch (_) {
        /* Session storage is optional. */
      }
    }

    function setupBotanicalMotion() {
      const hero = home.querySelector(".hero-grid");
      const botanical = hero?.querySelector(".botanical-flourish");
      if (!hero || !botanical) return () => {};
      const finePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      );
      let frame = 0;
      let lastTime = 0;
      let x = 0;
      let y = 0;
      let targetX = 0;
      let targetY = 0;
      const enabled = () =>
        finePointer.matches &&
        !reducedMotion.matches &&
        currentView === "home" &&
        !home.hidden &&
        !document.hidden;
      const paint = () => {
        botanical.style.setProperty("--botanical-x", `${x.toFixed(2)}px`);
        botanical.style.setProperty("--botanical-y", `${y.toFixed(2)}px`);
      };
      const reset = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = lastTime = x = y = targetX = targetY = 0;
        paint();
      };
      const animate = (time) => {
        if (!enabled()) {
          reset();
          return;
        }
        const elapsed = lastTime ? Math.min(time - lastTime, 64) : 16.67;
        const smoothing = 1 - Math.exp(-elapsed / 115);
        lastTime = time;
        x += (targetX - x) * smoothing;
        y += (targetY - y) * smoothing;
        if (Math.abs(targetX - x) < 0.02 && Math.abs(targetY - y) < 0.02) {
          x = targetX;
          y = targetY;
          frame = lastTime = 0;
          paint();
          return;
        }
        paint();
        frame = requestAnimationFrame(animate);
      };
      const schedule = () => {
        if (!frame && enabled()) frame = requestAnimationFrame(animate);
      };
      const respondToPointer = (event) => {
        if (!enabled() || event.pointerType === "touch") return;
        const bounds = hero.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const clamp = (value) => Math.max(-12, Math.min(12, value));
        targetX = clamp(
          ((event.clientX - bounds.left) / bounds.width - 0.5) * 24,
        );
        targetY = clamp(
          ((event.clientY - bounds.top) / bounds.height - 0.5) * 24,
        );
        schedule();
      };
      const returnToCenter = () => {
        if (!enabled()) {
          reset();
          return;
        }
        targetX = targetY = 0;
        schedule();
      };
      hero.addEventListener("pointerenter", respondToPointer, {
        passive: true,
      });
      hero.addEventListener("pointermove", respondToPointer, { passive: true });
      hero.addEventListener("pointerleave", returnToCenter, { passive: true });
      hero.addEventListener("pointercancel", returnToCenter, { passive: true });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) reset();
      });
      window.addEventListener("blur", reset);
      finePointer.addEventListener("change", reset);
      reducedMotion.addEventListener("change", reset);
      return reset;
    }

    function renderRoute(userNavigation = false) {
      const id = readRoute();
      const section = byId(id) || home;
      if (id !== currentView) resetBotanicalMotion();
      if (userNavigation) {
        // Browser history can change the route while an overlay is still open.
        // Close it before moving focus to the newly visible page heading.
        if (dialog?.open) closeCommand(() => {});
        if (
          byId("resourceModal")?.hidden === false &&
          typeof closeResourceModal === "function"
        )
          closeResourceModal();
        if (
          byId("caseModal")?.hidden === false &&
          typeof closeCaseModal === "function"
        )
          closeCaseModal();
        if (typeof closeEditMode === "function") closeEditMode();
      }
      currentView = id;
      for (const item of sections) {
        item.hidden = item !== section;
        item.classList.remove("view-enter");
      }
      document.body.dataset.view = id;
      document.querySelectorAll("a.sidebar-link").forEach((link) => {
        const active = readRoute(link.hash) === id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
      setText(
        "currentPageLabel",
        availablePages.find((page) => page.id === id)?.title ||
          "Your workspace",
      );
      rememberBuilder(id);
      closeNavigation();
      updateDashboard();
      requestAnimationFrame(() => {
        if (currentView !== id) return;
        section.classList.add("view-enter");
        if (userNavigation) {
          const heading = section.querySelector("h1, h2");
          if (heading) {
            heading.setAttribute("tabindex", "-1");
            heading.focus({ preventScroll: true });
          }
          window.scrollTo({
            top: 0,
            behavior: reducedMotion.matches ? "instant" : "smooth",
          });
        }
      });
    }

    function navigate(id) {
      if (!pageIds.has(id)) return;
      const nextHash = `#${id}`;
      if (location.hash !== nextHash) history.pushState(null, "", nextHash);
      renderRoute(true);
    }

    function hasDraft(key) {
      const drafts = state().drafts || {};
      return (
        Object.values(drafts[key] || {}).some((value) =>
          String(value ?? "").trim(),
        ) || Boolean(String(drafts[`${key}Output`] || "").trim())
      );
    }

    function updateDashboard() {
      const data = state();
      const projects = Array.isArray(data.projects) ? data.projects : [];
      const checklist = Array.isArray(data.eventChecklist)
        ? data.eventChecklist
        : [];
      const done = checklist.filter((item) => item.done).length;
      const progress = checklist.length
        ? Math.round((done / checklist.length) * 100)
        : 0;
      const activeDrafts = Object.entries(builders).filter(([, key]) =>
        hasDraft(key),
      );
      setText("homeProjectCount", projects.length);
      setText("homeDraftCount", activeDrafts.length);
      setText("homeChecklistValue", `${progress}%`);
      setText("homeResourceCount", resources().length);
      const progressBar = byId("homeChecklistBar");
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
        const accessibleBar = progressBar.closest('[role="progressbar"]');
        if (accessibleBar) {
          accessibleBar.setAttribute("aria-valuenow", String(progress));
          accessibleBar.setAttribute(
            "aria-valuetext",
            `${done} of ${checklist.length} checklist items complete`,
          );
        }
      }
      const resume = byId("resumeWork");
      if (resume) {
        const destination =
          activeDrafts.find(([id]) => id === lastBuilder)?.[0] ||
          activeDrafts[0]?.[0] ||
          "proposal-builder";
        resume.href = `#${destination}`;
        resume.setAttribute(
          "aria-label",
          activeDrafts.length
            ? `Continue your ${builders[destination]} draft`
            : "Start a proposal",
        );
      }
      renderProjectSummary(projects);
      renderResourceShelf();
      if (dialog?.open && document.activeElement === commandInput)
        renderCommandResults();
    }

    function renderProjectSummary(projects) {
      const container = byId("homeRecentList");
      if (!container) return;
      const signature = JSON.stringify(projects);
      if (signature === projectsSignature) return;
      projectsSignature = signature;
      container.replaceChildren();
      if (!projects.length) {
        const empty = text("div", "", "home-empty");
        empty.append(
          text("p", "Every project begins with an idea.", "home-empty-title"),
        );
        empty.append(
          text(
            "p",
            "Add your first project to keep its goals, deadlines, and next steps together.",
          ),
        );
        const link = text("a", "Create a project →", "text-link");
        link.href = "#project-dashboard";
        empty.append(link);
        container.append(empty);
        return;
      }
      const now = new Date();
      const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      const upcoming = projects
        .filter(
          (project) =>
            project.deadline >= today &&
            !["Completed", "Reflected"].includes(project.status),
        )
        .sort((a, b) => a.deadline.localeCompare(b.deadline));
      const ordered = [
        ...upcoming,
        ...projects.filter((project) => !upcoming.includes(project)),
      ].slice(0, 3);
      for (const project of ordered) {
        const link = text("a", "", "project-row");
        link.href = "#project-dashboard";
        const copy = text("span", "", "project-row-copy");
        copy.append(
          text(
            "span",
            project.title || "Untitled project",
            "project-row-title",
          ),
        );
        const metadata = [
          project.status || "Idea",
          project.deadline ? `Due ${project.deadline}` : "No deadline yet",
        ];
        copy.append(text("span", metadata.join(" · "), "project-row-meta"));
        const arrow = text("span", "↗", "project-row-arrow");
        arrow.setAttribute("aria-hidden", "true");
        link.append(copy, arrow);
        link.addEventListener("click", (event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
            return;
          event.preventDefault();
          navigate("project-dashboard");
          if (typeof loadProjectForEdit === "function")
            loadProjectForEdit(project.id);
        });
        container.append(link);
      }
    }

    function renderResourceShelf() {
      const container = byId("homeResourceShelf");
      if (!container) return;
      const allResources = resources();
      const featuredIds = [
        "student-initiative-proposal",
        "event-planning-checklist",
        "leadership-reflection-sheet",
      ];
      const featured = featuredIds
        .map((id) => allResources.find((resource) => resource.id === id))
        .filter(Boolean);
      const selected = [
        ...featured,
        ...allResources.filter((resource) => !featured.includes(resource)),
      ].slice(0, 3);
      const signature = JSON.stringify(
        selected.map(({ id, title, category, description }) => ({
          id,
          title,
          category,
          description,
        })),
      );
      if (signature === resourceShelfSignature) return;
      resourceShelfSignature = signature;
      container.replaceChildren();
      for (const resource of selected) {
        const button = text("button", "", "resource-shelf-card");
        button.type = "button";
        button.append(
          text(
            "span",
            resource.category || "Resource",
            "resource-shelf-category",
          ),
        );
        button.append(text("span", resource.title, "resource-shelf-title"));
        button.append(
          text(
            "span",
            resource.description ||
              "Open this resource and adapt it to your project.",
            "resource-shelf-description",
          ),
        );
        const arrow = text("span", "Open resource ↗", "resource-shelf-arrow");
        arrow.setAttribute("aria-hidden", "true");
        button.append(arrow);
        button.addEventListener("click", () => {
          if (typeof openResourceModal === "function")
            openResourceModal(resource.id);
        });
        container.append(button);
      }
      if (!selected.length)
        container.append(
          text(
            "p",
            "Your resources will appear here when you add them in Edit Mode.",
            "small-note",
          ),
        );
    }

    function selectResult(index, moveFocus = false) {
      if (!resultButtons.length) return;
      selectedResult = (index + resultButtons.length) % resultButtons.length;
      resultButtons.forEach((button, i) =>
        button.classList.toggle("is-selected", selectedResult === i),
      );
      if (moveFocus) resultButtons[selectedResult].focus();
    }

    function renderCommandResults() {
      if (!commandResults || !commandInput) return;
      const query = commandInput.value.toLowerCase().trim();
      const words = query.split(/\s+/).filter(Boolean);
      const matches = (value) =>
        words.every((word) => value.toLowerCase().includes(word));
      let results;
      if (!query) {
        results = availablePages
          .filter((page) =>
            [
              "proposal-builder",
              "pitch-builder",
              "event-checklist",
              "project-dashboard",
              "reflection-builder",
              "templates",
            ].includes(page.id),
          )
          .map((page) => ({ ...page, kind: "tool" }));
      } else {
        const matchedPages = availablePages
          .filter((page) =>
            matches(`${page.title} ${page.description} ${page.keywords}`),
          )
          .map((page) => ({ ...page, kind: "tool" }));
        const matchedResources = resources()
          .filter((resource) =>
            matches(
              `${resource.title} ${resource.category} ${resource.description || ""}`,
            ),
          )
          .map((resource) => ({ ...resource, kind: "resource" }));
        results = [...matchedPages, ...matchedResources].slice(0, 12);
      }
      commandResults.replaceChildren();
      resultButtons = [];
      selectedResult = 0;
      if (!results.length) {
        commandResults.append(
          text(
            "p",
            "No matches. Try “proposal”, “event”, or “reflection”.",
            "command-empty",
          ),
        );
        return;
      }
      results.forEach((result, index) => {
        const button = text("button", "", "command-result");
        button.type = "button";
        const copy = text("span", "", "command-result-copy");
        copy.append(text("span", result.title, "command-result-title"));
        copy.append(
          text(
            "span",
            result.kind === "resource"
              ? `Resource · ${result.category || "Template"}`
              : result.description,
            "command-result-meta",
          ),
        );
        const arrow = text("span", "↗", "command-result-arrow");
        arrow.setAttribute("aria-hidden", "true");
        button.append(copy, arrow);
        button.addEventListener("focus", () => selectResult(index));
        button.addEventListener("click", () =>
          closeCommand(() => {
            if (
              result.kind === "resource" &&
              typeof openResourceModal === "function"
            )
              openResourceModal(result.id);
            else navigate(result.id);
          }),
        );
        commandResults.append(button);
        resultButtons.push(button);
      });
      selectResult(0);
    }

    function openCommand(trigger) {
      if (!dialog || !commandInput || dialog.open) return;
      commandTrigger =
        trigger instanceof HTMLElement ? trigger : document.activeElement;
      closeNavigation();
      commandInput.value = "";
      renderCommandResults();
      dialog.showModal();
      document.body.classList.add("modal-open");
      commandInput.focus();
    }

    function closeCommand(afterClose = null) {
      if (!dialog?.open) return;
      afterCommandClose = typeof afterClose === "function" ? afterClose : null;
      dialog.close();
    }

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest?.("[data-open-command]");
      if (trigger) {
        openCommand(trigger);
        return;
      }
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      )
        return;
      const link = event.target.closest?.('a[href^="#"]');
      if (!link || link.target === "_blank" || link.hasAttribute("download"))
        return;
      const rawId = link.getAttribute("href").slice(1);
      if (rawId === "main-content") {
        event.preventDefault();
        byId("main-content")?.focus({ preventScroll: true });
        window.scrollTo({
          top: 0,
          behavior: reducedMotion.matches ? "instant" : "smooth",
        });
        return;
      }
      if (rawId && rawId !== "top" && !pageIds.has(rawId)) return;
      event.preventDefault();
      navigate(readRoute(link.hash));
    });

    window.addEventListener("hashchange", () => renderRoute(true));
    document.addEventListener("workspace:statechange", updateDashboard);
    document.addEventListener("input", (event) => {
      if (event.target.closest?.("main > .section")?.id === currentView)
        rememberBuilder(currentView);
    });
    backdrop?.addEventListener("click", () => closeNavigation(true));
    if (navigation)
      new MutationObserver(syncNavigation).observe(navigation, {
        attributes: true,
        attributeFilter: ["class"],
      });

    document.querySelectorAll("[data-command-shortcut]").forEach((node) => {
      node.textContent = /Mac|iPhone|iPad|iPod/.test(navigator.platform)
        ? "⌘ K"
        : "Ctrl K";
    });
    byId("commandClose")?.addEventListener("click", () => closeCommand());
    commandInput?.addEventListener("input", renderCommandResults);
    dialog?.addEventListener("close", () => {
      const next = afterCommandClose;
      afterCommandClose = null;
      if (!document.querySelector(".modal-overlay:not([hidden]), dialog[open]"))
        document.body.classList.remove("modal-open");
      if (next) next();
      else if (
        commandTrigger?.isConnected &&
        commandTrigger.getClientRects().length &&
        !commandTrigger.closest("[hidden]")
      ) {
        commandTrigger.focus({ preventScroll: true });
      }
    });
    dialog?.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      )
        closeCommand();
    });
    dialog?.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const direction = event.key === "ArrowDown" ? 1 : -1;
        selectResult(
          document.activeElement === commandInput
            ? direction > 0
              ? 0
              : resultButtons.length - 1
            : selectedResult + direction,
          true,
        );
      } else if (
        event.key === "Enter" &&
        document.activeElement === commandInput
      ) {
        event.preventDefault();
        resultButtons[selectedResult]?.click();
      }
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        if (document.querySelector(".modal-overlay:not([hidden])")) return;
        event.preventDefault();
        if (dialog?.open) closeCommand();
        else openCommand(document.activeElement);
      }
      if (
        event.key === "Escape" &&
        !dialog?.open &&
        !document.querySelector(".modal-overlay:not([hidden])") &&
        navigation?.classList.contains("is-open")
      ) {
        closeNavigation(true);
      }
    });

    const reveals = Array.from(document.querySelectorAll(".reveal"));
    if ("IntersectionObserver" in window && !reducedMotion.matches) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove("is-pending");
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08 },
      );
      reveals.forEach((node) => {
        node.classList.add("is-pending");
        observer.observe(node);
      });
      reducedMotion.addEventListener("change", (event) => {
        if (!event.matches) return;
        observer.disconnect();
        reveals.forEach((node) => {
          node.classList.remove("is-pending");
          node.classList.add("is-visible");
        });
      });
    } else {
      reveals.forEach((node) => node.classList.add("is-visible"));
    }

    resetBotanicalMotion = setupBotanicalMotion();
    renderRoute(false);
    document.documentElement.classList.remove("workspace-booting");
    syncNavigation();
    document.body.classList.add("workspace-ready");
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", startWorkspace);
  else startWorkspace();
})();
