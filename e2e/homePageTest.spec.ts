import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page).toHaveTitle("What Tuh Eat");
});

test("order now link", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "Order Now" }).click();
  await expect(page).toHaveURL("http://localhost:3000/products");
});

test("browse website", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(page.getByRole("heading", { name: "WTE Food Service" })).toBeVisible();
  await page.getByRole("button", { name: "Order Now" }).click();
  expect(page.url()).toBe("http://localhost:3000/products");
});

test("new products section", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(page.getByRole("heading", { name: "New Products" })).toBeDefined();
});

test("category section", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(
    page.getByRole("heading", { name: "Browse Our Categories" })
  ).toBeDefined();
});

test("best seller section", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(
    page.getByRole("heading", { name: "Browse Best Sellers" })
  ).toBeDefined();
});

test("see all categories link", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("link", { name: "See All Categories" }).click();
  await expect(page).toHaveURL("http://localhost:3000/categories");
});

test("check new products length", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByRole("listitem")).toHaveCount(3);
});

test("check categories length", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const categories = await page.$$(".green-bg");
  expect(categories.length).toBeGreaterThanOrEqual(3);
});

test("check best sellers length", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const bestSellers = await page.$$(".product-card1");
  expect(bestSellers.length).toBeGreaterThanOrEqual(3);
});

test("click first category", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const categories = await page.$$(".green-bg");
  await categories[0].click();
  await expect(page).toHaveURL(/.*categories\/\d+/);
});

test("add to cart from new products", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const addToCartButtons = await page.$$(
    ".product-card .product-card-overlay-icon"
  );
  await addToCartButtons[0].click();
  // Check for expected behavior after adding to cart, e.g. cart counter update, success message, etc.
});

test("add to cart from best sellers", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const addToCartButtons = await page.$$(".product-card1 button");
  await addToCartButtons[0].click();
  // Check for expected behavior after adding to cart, e.g. cart counter update, success message, etc.
});
