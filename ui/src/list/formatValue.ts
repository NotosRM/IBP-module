import { ListService, UiComponents } from "mdt-client";

// В ячейке со значением большим 10000 отображется иконка бесконечности
export function transformCell() {
	ListService.onCreate((list) => {
		if (list.getObject().getCode() != "formatValue.Warehouse") return;

		list.addTransformerForCell((cell) => {
			if (cell.col.fieldPath == "Count" && cell.value() > 10000) {
				cell.setContent([
					UiComponents.icon("infinity", {
						tooltip: cell.value().toString()
					})
				]);
			}
		});
	});
}

// import { ListService, UiComponents } from "mdt-client";

// export function transformCell() {
// 	ListService.onCreate((list) => {
// 		const formatValue: formatValueExtOptions = list.getExtOptions().formatValue;
// 		if (!formatValue) return;

// 		Object.keys(formatValue).map((fieldPath) => {
// 			list.addTransformerForCell((cell) => {
// 				if (cell.col.fieldPath == fieldPath && cell.value() > formatValue[fieldPath]) {
// 					cell.setContent([
// 						UiComponents.icon("infinity", {
// 							tooltip: cell.value().toString()
// 						})
// 					]);
// 				}
// 			});
// 		});
// 	});
// }

// interface formatValueExtOptions {
// 	[fieldPath: string]: maximum;
// }
// type maximum = number;
