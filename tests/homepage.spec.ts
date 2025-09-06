import { test, expect } from "@playwright/test";

test("homepage renders hero and projects", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: /backend engineer crafting reliable systems/i,
    })
  ).toBeVisible();

  // top nav projects link
  await expect(
    page.locator("header a", { hasText: "Projects" }).first()
  ).toBeVisible();

  // projects section exists
  const projects = page.locator("#projects");
  await expect(projects).toBeVisible();
});
