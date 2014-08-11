
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
        var abstract_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains(".abstract");
        });
        expect(abstract_rule.selectors[0]).toBe('.abstract');

        var border_values = _(abstract_rule.declarations).findWhere({property:"border"}).value.split(" ");
        expect(border_values).toContain("medium");
        expect(border_values).toContain("black");
        expect(border_values).toContain("solid");

        var color_value = _(abstract_rule.declarations).findWhere({property:"color"}).value;

        expect(color_value).toBe("white");

        var background_value = _(abstract_rule.declarations).findWhere({property:"background"}).value;
        expect(background_value).toBe("grey");

        var span_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains("span");
        });

        var border_values = _(span_rule.declarations).findWhere({property:"border"}).value;
        expect(border_values).toBe("inherit");

        done();
    });
});




