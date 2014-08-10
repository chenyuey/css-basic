
describe('practice_1_1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("id's priority higher than element selector", function (done) {

        var rules = css_object.stylesheet.rules;
        var a_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains("a");
        });
        expect(a_rule.selectors[0]).toBe('a');
        expect(a_rule.declarations[0].property).toBe("color");
        expect(a_rule.declarations[0].value).toBe("black");


        var a_hehe_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains("a.hehe");
        });

        expect(a_hehe_rule.selectors[0]).toBe('a.hehe');

        var a_hehe_rule_color_value = _(a_hehe_rule.declarations).findWhere({property:"color"}).value;
        expect(a_hehe_rule_color_value).toBe('white');

        var a_hehe_rule_background_value = _(a_hehe_rule.declarations).findWhere({property:"background"}).value;
        expect(a_hehe_rule_background_value).toBe('grey');

        done();
    });
});




