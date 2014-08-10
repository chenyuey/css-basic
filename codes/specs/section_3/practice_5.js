
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
        expect(rules[0].selectors[0]).toBe('a.hehe1');
        expect(rules[0].declarations[0].property).toBe('color');
        expect(rules[0].declarations[0].value).toBe('black');

        expect(rules[1].selectors[0]).toBe('a.hehe2');

        var a_hehe2_rule_color_value = _(rules[1].declarations).findWhere({property:"color"}).value;
        expect(a_hehe2_rule_color_value).toBe('white');

        var a_hehe2_rule_background_value = _(rules[1].declarations).findWhere({property:"background"}).value;
        expect(a_hehe2_rule_background_value).toBe('grey');

        done();
    });
});




