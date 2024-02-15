-npm is not node package manager
-package.json is a configuration file for npm
-bundler packages your app so that it can be shipped to the production
--e.g. Vite
--e.g.create react app uses webpack bundler.

**--There are two types of dependencies
**

1. Dev Dependancies (required for development env)
2. General Dependancies(can be used for production also)

If you put "^" in your dependencies list then it will be automatically updated when minor update is released
If you put "~" in your dependencies list then it will be automatically updated when major update is released

Package-lock.json keeps track of exact version numbers of dependencies while package.json keeps track of approximate version numbers
It is answer to it works on my machine but not on production

node_modules is actual packages needed for us
In this case parcel is installed as dev dependencies so there is a folder in node_modules called parcel, but there are other dependencies needed by parcel itself called transitive dependencies
