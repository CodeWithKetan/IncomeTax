function setTabNavigation() {
	let tabs = document.querySelector(".tabs");
	let tabHeader = tabs.querySelector(".tab-header");
	let tabBody = tabs.querySelector(".tab-body");
	let tabIndicator = tabs.querySelector(".tab-indicator");

	let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
	let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

	if (tabHeaderNodes.length > 1) {
		for (let i = 0; i < tabHeaderNodes.length; i++) {
			tabHeaderNodes[i].addEventListener("click", function () {
				tabHeader.querySelector(".active").classList.remove("active");
				tabHeaderNodes[i].classList.add("active");

				tabBody.querySelector(".active").classList.remove("active");
				tabBodyNodes[i].classList.add("active");
			});
		}

		if (tabHeaderNodes.length > 1) {
			document.getElementById("nextIncomeTabButton").disabled = false;
		}
	}
}

function nextIncomeTab() {
	let tabs = document.querySelector(".tabs");
	let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
	let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

	for (let i = 0; i < tabHeaderNodes.length; i++) {
		if (tabHeaderNodes[i].classList.contains("active")) {
			if (i + 1 == tabHeaderNodes.length) {
				tabHeaderNodes[i].classList.remove("active");
				tabHeaderNodes[0].classList.add("active");

				tabBodyNodes[i].classList.remove("active");
				tabBodyNodes[0].classList.add("active");
			} else {
				tabHeaderNodes[i].classList.remove("active");
				tabHeaderNodes[i + 1].classList.add("active");

				tabBodyNodes[i].classList.remove("active");
				tabBodyNodes[i + 1].classList.add("active");
			}
			break;
		}
	}

}

function previousIncomeTab() {
	let tabHeaderNodes = document.querySelectorAll(".tabs .tab-header > div");
	let tabBodyNodes = document.querySelectorAll(".tabs .tab-body > div");

	for (let i = tabHeaderNodes.length - 1; i >= 0; i--) {
		if (tabHeaderNodes[i].classList.contains("active")) {
			if (i == 0) {
				tabHeaderNodes[i].classList.remove("active");
				tabHeaderNodes[tabHeaderNodes.length - 1].classList.add(
					"active"
				);

				tabBodyNodes[i].classList.remove("active");
				tabBodyNodes[tabHeaderNodes.length - 1].classList.add("active");
			} else {
				tabHeaderNodes[i].classList.remove("active");
				tabHeaderNodes[i - 1].classList.add("active");

				tabBodyNodes[i].classList.remove("active");
				tabBodyNodes[i - 1].classList.add("active");
			}
			break;
		}
	}

}

// let otherIncomeForm = document.getElementById("form-other-income");
// let otherIncomeTable = document.getElementById("table-other-income");
// otherIncomeForm.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	submitOtherIncome();
// });

// const submitOtherIncome = () => {
//   var amount = document.getElementById("other-income-amount").value;
//   var date = document.getElementById("other-income-date").value;
//   var description = document.getElementById("other-income-description").value;

//   var rawNo = otherIncomeTable.rows.length;
//   let row = otherIncomeTable.insertRow(rawNo);
//   let cell1 = row.insertCell(0);
//   let cell2 = row.insertCell(1);
//   let cell3 = row.insertCell(2);
//   let cell4 = row.insertCell(3);
//   let cell5 = row.insertCell(4);

//   cell1.innerHTML = rawNo;
//   cell2.innerHTML = amount;
//   cell3.innerHTML = date;
//   cell4.innerHTML = description;
//   cell5.innerHTML = "";
//   otherIncomeForm.reset();
// };
