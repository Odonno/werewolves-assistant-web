import { getProp } from "@/helpers/functions/Class";

class Player {
    constructor(player = null) {
        this._id = getProp(player, "_id");
        this.name = getProp(player, "name");
        this.role = {
            original: getProp(player, "role.original"),
            current: getProp(player, "role.current"),
        };
        this.side = {
            original: getProp(player, "side.original"),
            current: getProp(player, "side.current"),
        };
        this.attributes = getProp(player, "attributes", [], attributes => attributes.map(attribute => attribute));
        this.isAlive = getProp(player, "isAlive");
        this.murdered = {
            by: getProp(player, "murdered.by"),
            of: getProp(player, "murdered.of"),
        };
    }

    hasAttribute(attributeName) {
        return !!this.attributes.find(({ name }) => name === attributeName);
    }

    get currentRole() {
        return this.role.current;
    }
}

export default Player;