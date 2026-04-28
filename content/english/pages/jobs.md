---
title: "💻 Jobs"
# meta title
meta_title: "New/CompBio Job Opportunities in the Nordics"
# meta description
description: "Computational biology Jobs in the Nordic countries"
# save as draft
draft: false
---

These are the current open positions in the Nordic countries related to computational biology. If you would like to post a job opening, submit the details in our contact page.

{{< button label="Contact us" link="/contact" style="solid" >}}

## Open Positions

| Position        |      Location      | Salary | Deadline | Link |
| ------------- | ----------- | ---- | ---- | ---- |
| Researcher in Single-cell Data Science for Cancer Research | Oslo universitetssykehus HF, Norway | NA | 17.05.2026 | {{< button label="Apply" link="https://www.finn.no/job/ad/461138160" style="solid" >}} |
| Researcher/Researcher without a doctorate in Breast Cancer Risk and Genetic Interactions | Oslo universitetssykehus HF, Norway | NA | 11.05.2026 | {{< button label="Apply" link="https://www.finn.no/job/ad/461109325" style="solid" >}} |



<style>
th {
  background-color: #042d50;
  color: #ffffff;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const jobsHeading = [...document.querySelectorAll("h2")].find(
    (h) => h.textContent.trim().toLowerCase() === "open positions",
  );
  const jobsTable = jobsHeading?.nextElementSibling;
  if (!jobsTable || jobsTable.tagName !== "TABLE") return;

  const deadlineIndex = [...jobsTable.querySelectorAll("thead th")]
    .map((th) => th.textContent.trim().toLowerCase())
    .indexOf("deadline");
  if (deadlineIndex === -1) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const parseDeadline = (value) => {
    const raw = value.trim().toLowerCase();
    if (!raw || raw === "na" || raw === "n/a") return null;
    const [day, month, year] = raw.split(".").map(Number);
    if (!day || !month || !year) return null;
    const date = new Date(year, month - 1, day);
    date.setHours(0, 0, 0, 0);
    return date;
  };

  [...jobsTable.querySelectorAll("tbody tr")].forEach((row) => {
    const cell = row.querySelectorAll("td")[deadlineIndex];
    const deadlineDate = cell ? parseDeadline(cell.textContent || "") : null;
    if (deadlineDate && deadlineDate < today) row.remove();
  });

  if (!jobsTable.querySelector("tbody tr")) {
    const emptyState = document.createElement("p");
    emptyState.textContent = "No open positions right now. Please check back soon.";
    jobsTable.insertAdjacentElement("afterend", emptyState);
  }
});
</script>