import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("What Tuh Eat");
});

test("order now link", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Click the get started link.
  await page.getByRole("link", { name: "Order Now" }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL("http://localhost:3000/products");
});

test("browse website", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  expect(page.getByRole("heading", { name: "WTE Food Service" })).toBeVisible();

  await page.getByRole("button", { name: "Order Now" }).click();

  expect(page.url()).toBe("http://localhost:3000/products");
});
