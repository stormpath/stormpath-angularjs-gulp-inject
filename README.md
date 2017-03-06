#Stormpath is Joining Okta
We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).


# AngularJS + Spring Boot + Stormpath Example, Part 3

This project is an example application for a typical [AngularJS](http://angularjs.org/) webapp with a [Spring Boot](https://projects.spring.io/spring-boot/) backend.

You can read about how this application was created on [the Stormpath blog](https://stormpath.com/blog/angularjs-with-gulp-inject). Feel free to copy any code in this project for your own use in accordance with the [MIT license](LICENSE).

Through this project's commit logs, it shows you how to:

1. [Use Gulp Inject to auto-add CSS and JS files to index.html](https://github.com/stormpath/stormpath-angularjs-gulp-inject/commit/f0060b006cba9dc7f19854851a4532d1536b5ed2)

**Prerequisites**: Java 8, Node.js, Maven, Gulp.js, a [Stormpath Account](https://api.stormpath.com/register), and an `apiKey.properties` file in `~/stormpath/`.

To run the Spring Boot backend, execute `mvn spring-boot:run`.

To run the AngularJS frontend, execute `npm install && gulp`. 
