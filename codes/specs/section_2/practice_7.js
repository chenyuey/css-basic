
describe('practice-2-1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("use star selector to change all elements", function (done) {
//        console.log(JSON.stringify(css_object));
        var rules = css_object.stylesheet.rules;
        var border_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains(".highlight");
        });
        expect(border_rule.selectors).toContain('.highlight');
        expect(border_rule.selectors).toContain('.abstract a');

        var border_values = _(border_rule.declarations).findWhere({property:"border"}).value.split(" ");
        expect(border_values).toContain("thin");
        expect(border_values).toContain("black");
        expect(border_values).toContain("solid");

        var abstract_rule = _(rules).find(function(rule){
            return _(rule.selectors).contains(".abstract");
        });

        expect(abstract_rule.selectors[0]).toBe('.abstract');
        expect(abstract_rule.declarations[0].property).toBe("color");
        expect(abstract_rule.declarations[0].value).toBe("grey");

        var abstract_a_rule = _(rules).find(function(rule){
            return rule.selectors.length ==1 && _(rule.selectors).contains(".abstract a");
        });

        expect(abstract_a_rule.selectors[0]).toBe('.abstract a');

        var abstract_a_rule_color_value = _(abstract_a_rule.declarations).findWhere({property:"color"}).value;
        expect(abstract_a_rule_color_value).toBe('grey');


        var abstract_a_rule_text_decoration_value = _(abstract_a_rule.declarations).findWhere({property:"text-decoration"}).value
        expect(abstract_a_rule_text_decoration_value).toBe('none');

        done();
    });
});




