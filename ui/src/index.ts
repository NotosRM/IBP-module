import { registerModule } from "mdt-client";
import { transformCell } from "./list/formatValue";
import { addWarehouseNode } from "./navigation/addWareHouseNode";

registerModule(() => {
	addWarehouseNode();
	transformCell();
});
