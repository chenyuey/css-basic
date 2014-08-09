
describe('practice-2-1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("use star selector to change all elements", function (done) {
        console.log(JSON.stringify(css_object));

        expect(css_object.stylesheet.rules[0].selectors[0]).toBe('#w3c-link');

        var border_values = _(css_object.stylesheet.rules[0].declarations).findWhere({property:"border"}).value.split(" ");
        expect(border_values).toContain("thin");
        expect(border_values).toContain("black");
        expect(border_values).toContain("solid");

        var color = _(css_object.stylesheet.rules[0].declarations).findWhere({property:"color"});
        expect(color).toBe("black");

        var text_decoration = _(css_object.stylesheet.rules[0].declarations).findWhere({property:"text-decoration"});
        expect(text_decoration).toBe("none");
        done();
    });
});




