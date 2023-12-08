# Product Sample Sets

JDS sells groupings of similar products as a sample set for our retailers to try out and display for their own customers. This typically consists of one of each color of a given product. Sample sets DO each have their own product SKU and can be purchased on the website.

## Inventory Counts

To find the inventory count of a Sample Set (or other kits), you must look at the quantities of all items in that Sample Set and the answer is the lowest number. This is because each sample set typically needs one of each item and so the lowest item count is how many you have in stock.

## Product Images

For product images, sample set items share the product images of their sample set parent, in addition to their own.

## Database

Sample sets can be found in the `FILES.ITMMKTINF` table by looking at the `SAMPLESET` value in the `ITMINFKEY` column. In V2, these are being migrated over to the `sample_sets` and `sample_sets_products` tables to make them easier to work with.
