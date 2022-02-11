import { HassEntity } from "home-assistant-js-websocket";

export function getPercentage(entity: HassEntity) {
    return entity.attributes.percentage != null
        ? Math.round(entity.attributes.percentage)
        : 100;
}

export function isOscillating(entity: HassEntity) {
    return entity.attributes.oscillating != null ? Boolean(entity.attributes.oscillating) : false;
}
