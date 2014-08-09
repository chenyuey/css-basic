
describe('practice-2-1', function () {
    var css_object;

    beforeEach(function(done) {
        $.get("style.css").then(function(data) {
            css_object = css.parse(data);
            done();
        });
    });

    it("use star selector to change all elements", function (done) {

            var border_values = _(css_object.stylesheet.rules[0].declarations).findWhere({property:"border"}).value.split(" ");
            console.log(border_values);

            expect(border_values).toContain("thin");
            expect(border_values).toContain("black");
            expect(border_values).toContain("solid");


            done();
        });
});




