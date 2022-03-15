import { Navigation } from "mdt-client";

export function addWarehouseNode() {
	Navigation.addNode({
		title: "Warehouse",
		code: "formatValueWarehouse",
		objectCode: "formatValue.Warehouse"
	});
}
