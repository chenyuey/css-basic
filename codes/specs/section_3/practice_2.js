
describe('practice_1_1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("id's priority higher than element selector", function (done) {

        console.log(JSON.stringify(css_object));
        expect(css_object.stylesheet.rules[0].selectors[0]).toBe('#change');
        expect(css_object.stylesheet.rules[0].declarations[0].property).toBe('color');
        expect(css_object.stylesheet.rules[0].declarations[0].value).toBe('black');

        done();
    });
});




