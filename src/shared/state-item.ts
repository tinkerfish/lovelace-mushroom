import { css, CSSResultGroup, html, LitElement, TemplateResult } from "lit";
import { property, customElement } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import "./shape-icon";

@customElement("mushroom-state-item")
export class StateItem extends LitElement {
    @property() public vertical: boolean = false;

    @property() public hide_icon: boolean = false;

    @property() public hide_info: boolean = false;

    protected render(): TemplateResult {
        return html`
            <div
                class=${classMap({
                    container: true,
                    vertical: this.vertical,
                })}
            >
                ${!this.hide_icon
                    ? html`<div class="icon">
                          <slot name="icon"></slot>
                          <slot name="badge"></slot>
                      </div>`
                    : null}
                ${!this.hide_info
                    ? html`<div class="info">
                          <slot name="info" class="info"></slot>
                      </div>`
                    : null}
            </div>
        `;
    }

    static get styles(): CSSResultGroup {
        return css`
            .container {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
            }
            .container > *:not(:last-child) {
                margin-right: var(--spacing);
            }
            .icon {
                position: relative;
            }
            .icon ::slotted(*[slot="badge"]) {
                position: absolute;
                top: -3px;
                right: -3px;
            }
            .info {
                min-width: 0;
                flex: 1;
                display: flex;
                flex-direction: column;
            }
            .container.vertical {
                flex-direction: column;
            }
            .container.vertical > *:not(:last-child) {
                margin-bottom: var(--spacing);
                margin-right: 0;
            }
            .container.vertical .info {
                text-align: center;
            }
        `;
    }
}
