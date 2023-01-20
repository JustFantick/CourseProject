import * as flsFunctions from "./modules/functions.js";
import * as header from "./modules/header.js";
import { useDynamicAdapt } from "./modules/dinamicAdaptive.js";
import { footerBtnActivate } from "./modules/footer.js";
import { sortBtnActivate } from "./modules/sort-btn.js";
import { formValidationActivate } from "./modules/making-order.js";
import * as amountNsizes from "./modules/amount&sizes.js";
import { getCartWorked } from "./modules/cart.js";

flsFunctions.isWebp();
header.menuBurgerActivate();
header.cartActivate();

useDynamicAdapt();
footerBtnActivate();
if (document.querySelector('.sort-btn')) sortBtnActivate();
if (document.querySelector('.make-order-btn')) formValidationActivate();
if (document.querySelector('.sizes')) {
	amountNsizes.sizesActivate();
	amountNsizes.amountActivate();
};

getCartWorked();