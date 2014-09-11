
describe('practice_4_1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("three columns with liquid layout", function (done) {
        var rules = css_object.stylesheet.rules;

        var container_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains(".container");
        });

        expect(container_rule.selectors[0]).toBe('.container');

        var container_rule_overflow_value = _(sidebar_rule.declarations).findWhere({property:"overflow"}).value;

        expect(container_rule_overflow_value).toBe("hidden");

        var sidebar_rule = _(rules).find(function(rule){
            return rule.selectors.length ==1 && _(rule.selectors).contains(".sidebar");
        });

        expect(sidebar_rule.selectors[0]).toBe('.sidebar');

        var sidebar_rule_float_value = _(sidebar_rule.declarations).findWhere({property:"float"}).value;
        expect(sidebar_rule_float_value).toBe("left");

        var sidebar_rule_width_value = _(sidebar_rule.declarations).findWhere({property:"width"}).value;
        expect(sidebar_rule_width_value).toBe('16%');

        var main_rule = _(rules).find(function(rule){
            return rule.selectors.length ==1 && _(rule.selectors).contains(".main");
        });

        expect(main_rule.selectors[0]).toBe('.main');

        var main_rule_float_value = _(main_rule.declarations).findWhere({property:"float"}).value;
        expect(main_rule_float_value).toBe("left");

        var main_rule_width_value = _(main_rule.declarations).findWhere({property:"width"}).value;
        expect(main_rule_width_value).toBe('76%');

        var footer_rule = _(rules).find(function(rule){
            return rule.selectors.length ==1 && _(rule.selectors).contains("footer");
        });

        expect(footer_rule.selectors[0]).toBe('footer');

        var footer_rule_clear_value = _(main_rule.declarations).findWhere({property:"clear"}).value;
        expect(footer_rule_clear_value).toBe("both");

        done();
    });
});
