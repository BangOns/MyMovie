export function DropDown(a1, a2, a3, nameDisplay, arrow1, arrow2, arrow3) {
  arrow2.className = "img-arrow";
  arrow3.className = "img-arrow";
  if (arrow1.className === "img-arrow") {
    a1.className = `${nameDisplay}-ListDisplay active-ListDisplayMobile`;
    a1.style.display = "block";
    a2.style.display = "none";
    a3.style.display = "none";
    arrow1.className = "img-arrow active-arrow";
  } else if (arrow1.className === "img-arrow active-arrow") {
    a1.style.display = "none";
    a2.style.display = "none";
    a3.style.display = "none";
    arrow1.className = "img-arrow";
    a1.className = `${nameDisplay}-ListDisplay`;
  }
}
