class Bounce {
    constructor(el) {
        this.el = el;

        this.anim = [
            { transform: "scale(1.0)" },
            { transform: "scale(1.5)" },
            { transform: "scale(1.5)" },
            { transform: "scale(1.5)" },
            { transform: "scale(0.8)" },
            { transform: "scale(1.0)" },
            { transform: "scale(0.9)" },
            { transform: "scale(1.1)" },
            { transform: "scale(1.0)" },
        ];
    }

    scale(el = this.el, am = this.anim) {
        el.animate(am, {
            duration: 1000,
            easing: "cubic-bezier(0.19, 1.0, 0.22, 1.0)",
        });
    }

    bounce(type, am = null) {
        switch (type) {
            case "scale":
                if (!am) {
                    this.scale();
                } else {
                    this.scale();
                }
                break;
        }
    }
}
