export const select = {
    templateOf: {
        menuProduct: '#template-menu-product',
        cartProduct: '#template-cart-product',
        bookingWidget: '#template-booking-widget',
        homePage: '#template-home',
    },
    containerOf: {
        menu: '#product-list',
        cart: '#cart',
        pages: '#pages',
        booking: '.booking-wrapper',
        homePage: '.home-wrapper',
        carousel: '.main-carousel',
    },
    all: {
        menuProducts: '#product-list > .product',
        menuProductsActive: '#product-list > .product.active',
        formInputs: 'input, select',
    },
    menuProduct: {
        clickable: '.product__header',
        form: '.product__order',
        priceElem: '.product__total-price .price',
        imageWrapper: '.product__images',
        amountWidget: '.widget-amount',
        cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
        amount: {
            input: 'input.amount',
            linkDecrease: 'a[href="#less"]',
            linkIncrease: 'a[href="#more"]',
        },
        datePicker: {
            wrapper: '.date-picker',
            input: `input[name="date"]`,
        },
        hourPicker: {
            wrapper: '.hour-picker',
            input: 'input[type="range"]',
            output: '.output',
            rangeSlider: '.rangeSlider',
        },
    },
    cart: {
        wrapper: '.cart',
        productList: '.cart__order-summary',
        toggleTrigger: '.cart__summary',
        content: '.cart__content',
        totalNumber: `.cart__total-number`,
        totalPrice: '.cart__total-price strong, .cart__order-total .cart__order-price-sum strong',
        subtotalPrice: '.cart__order-subtotal .cart__order-price-sum strong',
        deliveryFee: '.cart__order-delivery .cart__order-price-sum strong',
        form: '.cart__order',
        formSubmit: '.cart__order [type="submit"]',
        phone: '[name="phone"]',
        address: '[name="address"]',
        message: '.cart__message',
        delayTime: 200,
    },
    pages: {
        wrapper: '.pages',
        delayTime: 300,
    },
    homePage: {
        buttonsWrapper: '.first-section-wrapper',
        buttonOrder: '.first-section-wrapper div:first-of-type',
        buttonBooking: '.first-section-wrapper div:nth-of-type(2)',
    },
    cartProduct: {
        amountWidget: '.widget-amount',
        price: '.cart__product-price',
        edit: '[href="#edit"]',
        remove: '[href="#remove"]',
    },
    booking: {
        peopleAmount: '.people-amount',
        hoursAmount: '.hours-amount',
        floorPlan: '.floor-plan',
        tables: '.floor-plan .table',
        dataTable: 'data-table',
        bookingButton: '.order-confirmation button',
        phone: '[name="phone"]',
        email: '[name="email"]',
        checkboxes: '.checkbox label input',
    },
    nav: {
        wrapper: '.main-nav',
        links: '.main-nav a',
        delayTime: 300,
    },
};

export const classNames = {
    menuProduct: {
        wrapperActive: 'active',
        imageVisible: 'active',
    },
    cart: {
        wrapperActive: 'active',
        wrapperError: 'error',
        flashWhenUpdated: 'flash',
    },
    booking: {
        singleTable: 'table',
        loading: 'loading',
        tableBooked: 'booked',
        tableSelected: 'selected',
    },
    nav: {
        active: 'active',
        flashWhenUpdated: 'flash',
    },
    pages: {
        active: 'active',
        flashWhenUpdated: 'flash',
    },
};

export const messages = {
    order: {
        confirmation: ['ORDER CONFIRMATION.', 'Order sent successfully.', 'Please wait for delivery.'],
    },
    booking: {
        tableSelected: ['Table selected.'],
        tableNotSelected: ['No table selected.'],
        tableAlreadyBooked: ['Sorry', 'This table is already booked.'],
        time: ['Time changed.'],
        date: ['Date changed.'],
        dateChanged: ['Date changed.', 'Table selection reset.'],
        timeChanged: ['Time changed.', 'Table selection reset.'],
        bookingTooLong: ['Booking time in conflict', 'with other booking', 'or with closing time.'],
        confirmation: ['Booking confirmation', 'CONFIRMED.'],
    },
    error: {
        address: ['WARNING.', 'Please provide correct address.', 'At least 6 characters.'],
        email: ['WARNING.', 'Please provide correct email.', 'Including @ and dot.'],
        phone: ['WARNING.', 'Provide correct phone number.', '9 digits.'],
        cart: ['WARNING.', 'Cart looks empty.', 'Please put some products.'],
        table: ['WARNING', 'Table not selected.', 'Please select table.'],
        orderNotSent: ['ERROR. ORDER NOT SENT.'],
        bookingNotSent: ['ERROR', 'BOOKING NOT SENT.'],
        editNotImplemented: ['Sorry', 'Function under construction.', 'Not implemented yet.'],
    },
}

export const settings = {
    amountWidget: {
        defaultValue: 1,
        defaultMin: 1,
        defaultMax: 9,
    },
    cart: {
        defaultDeliveryFee: 20,
    },
    hours: {
        open: 12,
        close: 24,
    },
    datePicker: {
        maxDaysInFuture: 14,
    },
    booking: {
        tableIdAttribute: 'data-table',
    },
    db: {
        url: `//${window.location.hostname}${(window.location.hostname == 'localhost' ? ':3131' : '')}`,
        products: 'products',
        orders: 'orders',
        bookings: 'bookings',
        events: 'events',
        dateStartParamKey: 'date_gte',
        dateEndParamKey: 'date_lte',
        notRepeatParam: 'repeat=false',
        repeatParam: 'repeat_ne=false',
    },
};

export const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
    cartProduct: Handlebars.compile(document.querySelector(select.templateOf.cartProduct).innerHTML),
    bookingWidget: Handlebars.compile(document.querySelector(select.templateOf.bookingWidget).innerHTML),
    homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
};