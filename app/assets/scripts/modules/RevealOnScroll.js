import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(item, offsetItem) {
        this.itemsToReveal = $(item);
        this.hideInitially();
        this.createWaypoints(offsetItem);
    }

    hideInitially() {
        this.itemsToReveal.addClass('reveal-item')
    }

    createWaypoints(offsetItem) {
        this.itemsToReveal.each(function () {
            const currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function () {
                    $(currentItem).addClass('reveal-item--is-visible');
                },
                offset: offsetItem
            });
        })
    }
}

export default RevealOnScroll;