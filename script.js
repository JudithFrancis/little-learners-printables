const printableCatalog = {
  Preschool: [
    {
      subject: "English",
      title: "Letter Sounds Starter",
      description: "Sample placeholder card for simple phonics matching activities.",
      pdfUrl: ""
    },
    {
      subject: "Maths",
      title: "Count & Circle 1-10",
      description: "Sample placeholder card for counting, number spotting, and tracing.",
      pdfUrl: ""
    },
    {
      subject: "Drawing",
      title: "Shape Drawing Fun",
      description: "Sample placeholder card for tracing shapes and creative doodles.",
      pdfUrl: ""
    }
  ],
  "Primary 1": [
    {
      subject: "English",
      title: "Sight Word Practice",
      description: "Sample placeholder card for beginner reading and sentence building.",
      pdfUrl: ""
    },
    {
      subject: "Maths",
      title: "Add & Subtract Basics",
      description: "Sample placeholder card for simple addition and subtraction drills.",
      pdfUrl: ""
    },
    {
      subject: "Drawing",
      title: "Story Scene Sketch",
      description: "Sample placeholder card for guided drawing from short prompts.",
      pdfUrl: ""
    }
  ],
  "Primary 2": [
    {
      subject: "English",
      title: "Reading Comprehension Mini",
      description: "Sample placeholder card for short passages and question practice.",
      pdfUrl: ""
    },
    {
      subject: "Maths",
      title: "Word Problem Warm-Ups",
      description: "Sample placeholder card for age-level arithmetic thinking.",
      pdfUrl: ""
    },
    {
      subject: "Drawing",
      title: "Texture & Pattern Drawing",
      description: "Sample placeholder card for line work and pattern creativity.",
      pdfUrl: ""
    }
  ]
};

const stageContainers = {
  Preschool: document.getElementById("preschool-cards"),
  "Primary 1": document.getElementById("primary1-cards"),
  "Primary 2": document.getElementById("primary2-cards")
};

const liveMessage = document.getElementById("download-message");

function showDownloadMessage(message) {
  if (!liveMessage) {
    return;
  }
  liveMessage.textContent = message;
}

function isSafePrintableUrl(url) {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url, window.location.origin);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}

function handleDownload(card) {
  if (isSafePrintableUrl(card.pdfUrl)) {
    window.open(card.pdfUrl, "_blank", "noopener,noreferrer");
    return;
  }

  showDownloadMessage(
    `Sample only: ${card.subject} in ${card.stage}. Add a valid HTTP/HTTPS PDF URL in script.js to activate this download.`
  );
}

function createCard(stage, card) {
  const article = document.createElement("article");
  article.className = "card";
  article.setAttribute("data-subject", card.subject);
  article.setAttribute("role", "listitem");

  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = card.subject;

  const heading = document.createElement("h4");
  heading.textContent = card.title;

  const description = document.createElement("p");
  description.textContent = card.description;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = card.pdfUrl ? "Download printable" : "Sample download";
  button.setAttribute(
    "aria-label",
    `${button.textContent}: ${card.subject} printable for ${stage}${card.pdfUrl ? "" : " (placeholder)"}`
  );

  button.addEventListener("click", () => {
    handleDownload({ ...card, stage });
  });

  article.append(tag, heading, description, button);
  return article;
}

Object.entries(printableCatalog).forEach(([stage, cards]) => {
  const container = stageContainers[stage];
  if (!container) {
    console.warn(`Configuration note: no card container found for "${stage}".`);
    return;
  }
  cards.forEach((card) => {
    container.append(createCard(stage, card));
  });
});

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
