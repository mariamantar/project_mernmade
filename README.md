# Documentation

## 1. Who is your client?

## 2. What is your client’s need (i.e. challenge) that you will be addressing in your project?

## 3. Describe the client’s current setup and data:

## 4. Describe the project you will be conducting and how your App will address the client’s needs:

## 5. Identify and describe the software (including databases) to be used in your App:

## 6. Identify and describe the network setup you will use in your development:

## 7. Identify and describe the infrastructure (i.e. hardware) that your App will run on:

## 8. Describe the architecture of your App:

## 9. Explain the different high-level components (abstractions) in your App:

### Admin

Our application will serve the **Admin** for users who provide **Admin** authorization credentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- Admin page(to approve social media profiles/ Brand verfication)
- ManageSocialMediaProiflePage(to manage social media profiles)

### Registed Users

Our application will serve the **Registered User** for users who provide **Registed User** credentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- DashboardPage(to view/ search social media profiles)
- ProfilePage(to view/ rate social media profiles/ leave reviews)
- SettingPage(to manage interest/ wishlist/ view ratings)

### Guest User

Our application will serve the **Guest Users** for users who provide **Guest User** cerdentials. this application will have <n> main react components:

- AppRouter(App Navigation)
- DashBoard(to view/ search social media profiles)
- ProfilePage(to view)

### Express Backend

Node.js server will receive, handle requests/ api requests, send/ recieve data from the database, serve static assests, and serve data in JSON format.
Our server will also handle vaildation, authentication and authorization of our app.
A mailer system for account comfirmation, password reset requests.

### MongoDB DataBase

MonogoDB will be our database for our app, it will store all user data, social media profiles, rating data, review data.

## 10. Detail any third party services that your App will use:

- Facebook API(used for account login verification and offical account verfication)
- Instagram API(used for account login verifacation and offical account verfication)
- Google API(used for account login verification)
- <Mail service API>(used to send new users account comfirmation emails and to send users password reset emails)

## 11. Identify the database to be used in your app and provide a justification for your choice:

We decided to use <a href="https://www.mongodb.com/" target="_blank">Monogo</a> as its an object-oriented, simple to use , dynamic, and scalable <a href="https://searchdatamanagement.techtarget.com/definition/NoSQL-Not-Only-SQL" target="_blank">NoSQL</a> database. It’s based on the NoSQL document store model. **MonogoDB** works with data as <a href="https://thenewstack.io/technology-pairings-json-documents-databases/" target="_blank">flexible JSON documents</a>, rather than as rigid rows and columns as in <a href="http://www.sqlcourse.com/intro.htmls" target="_blank">SQL</a> databases. We found find this document style more natural, flexible and in terms of application speed fast.

Why we chose **MongoDB**?:

- Because it’s a downloadable archive which could be unpacked and used right away. **MongoDB** required minimum configuration, all we had to do was run the MonogoDB server then we could start filling JSON documents with data. With **MonogoDB** schema-less data model it’ll allow us rapid development throughout our build, wether we need to introduce new properties or change existing ones as we go without a need to perform schema evolutions and data migration. Arguably, but **MongoDB’s** style of manipulating documents and running queries is much more developer-friendly. Moreover, it does not require any language to learn, like SQL which use complex object-relational mapping (<a href="https://searchwindevelopment.techtarget.com/definition/object-relational-mapping" target="_blank">ORM</a>).

- **MonogoDB** JSON documents represents its data the same way applications do. Developers find the JSON document format natural to work with. Unlike the table rows and columns of a relational database, data can be structured with arrays and subdocuments – in the same way applications represent data, as lists and members / instance variables respectively. With that said, we feel that <a href="https://docs.mongodb.com/manual/core/data-modeling-introduction/" target="_blank">MongoDB document structure</a> will be simpler and faster to model how data will be mapped and stored in the our database.

* We find JSON documents to be flexible. Each document can store data with different attributes from other documents. As an example, consider a product catalog where a document storing details for an item of mens’ clothing will store different attributes from a document storing details of a tv or other electronics. This is referred as“polymorphism”. As your deployments grow in terms of data volume MongoDB scales easily with no downtime, and without changing your application which is an important consideration for us and our client.

- **MonogoDB** offers <a href="https://docs.mongodb.com/manual/security/" target="_blank">security</a> features which include include authentication, authorisation and auditing. Its foundation is a role-based access control with flexible set of privileges. **MonogoDB** provides allows us to assign <a href="https://docs.mongodb.com/manual/core/authorization/" target="_blank">user-defined roles</a> by defining a set of build-in roles such as (admin, registered users). It also give us the ability to use <a href="https://docs.mongodb.com/manual/core/security-transport-encryption/" target="_blank">TLS/SSL</a>Transport Layer Security/Secure Sockets Layer) to encrypt all of **MonogoDB’s** network traffic to ensure that it is only readable by the intended client.

## 12. Discuss the database relations to be implemented:

## 13. Provide your database schema design:

## 14. Provide User stories for your App:

### Admin StoryBoard

**Admin** in our app will be allowed to add social media profiles, verify brands, browse through the dashboard(filtered or not filtered) view social media profiles.

### Registered User StoryBoard

**Registered Users** will be able to sign up either through Facebook, Instagram, Google or locally.
Once signed in the **Registered User** will then go to the home page where they'll be able to view social media profiles in a tile form. The user can filter accounts based on (location, popularity(based on average number of followers), platform (e.g Instagram, Facebook, twitter, Youtube), type-of-account(Influencer, Feature account, Community) and engagement(based on average number of likes/views/comments))
**Registered users** can view profiles. **Registered users** can rate and also leave reviews on social media profiles. If **Registered users** like a particluar social media profile they are able to place them into a wish list. **Registered users** are able to delete thier account.

### Guest User StoryBoard

**Guest Users** enter the website they go straight to the home page where they'll be able to view social media profiles in a tile form.The **Guest User** can filter based on(location, popularity(based on average number of followers), platform(e.g Instagram, Facebook, Twitter, Youtube), type-of-account(Influencer, Feature account, Community), engagement(based on average number of likes/views/comments)).
**Guest Users** can view social media profiles. **Guest Users** will be able to sign up either through Facebook, Instagram, Google or locally.

## 15. Provide Wireframes for your App:

## 16. Describe the way Tasks are being allocated and tracked in your project:

## 17. Discuss how Agile methodology is being implemented in your App:

## 18.Provide an overview and description of your Source control process:

![alt text](https://github.com/LongNguyen206/project_mernmade/doc_images/git_workflow_chart.jpg)

### Initial work cycle:

1. We started with the **Git Admin** creating a `Central Remote Repo`:
   ```
   git init
   git add .
   git commit -m "Create Central Repo"
   git remote add origin <git_url>
   git push origin master
   ```
2. The **Git Admin** then creates a `Remote Dev Branch`, where each team member's code will be merged together and tested:
   ```
   (done in Github web app)
   ```
3. Each team member then clones the `Central Repo`:
   ```
   git clone <git_url>
   ```
4. Each team member then creates their `Local Dev Branch` and names it under their name:
   ```
   git checkout -b <team_member_dev>
   ```
5. Team members do the coding in the newly created `Local Dev Branch`
6. Work is added to the **staging phase**:
   ```
   git add .
   ```
7. Team members **commit** staged changes:
   ```
   git commit -m "<Commit message>"
   ```
8. When a significant amount of commits is accumulated, or when the individual work is requested for the `Central Repo`, the team member starts the process of **pushing their commits**. First step is to move from `Local Dev Branch` to `Local Master Branch`:
   ```
   git checkout master
   ```
9. The team member then **pulls** the `Remote Dev Branch` work into their `Local Master Branch` to have an up-to-date work of others:
   ```
   git pull origin dev
   ```
10. Their individual work is then merged from `Local Dev Branch` to `Local Master Branch`, so that they have their work added on top of the other team members' work:
    ```
    git merge <team_member_dev>
    ```
    In case of conflicts, team member will solve them manually. In this case, the team member has to **add** and **commit** again from their `Local Master Branch`.
11. Now, as the `Local Master Branch` has the most up-to-date combined code, team members will **push** this code to the `Remote Repo`, on the branch with their name. The following command will push to `Remote Repo` and **create a new branch** if needed:
    ```
    git push origin master:<team_member_dev>
    ```
12. Team members then proceed to create a **Pull Request** on the Github web app (in browser). The request intends to merge their `Personal Remote Branch` into `Remote Dev Branch`:
    ```
    (done in Github web app)
    ```
13. Team member assigns **Reviewers** for their Pull Request:
    ```
    (done in Github web app)
    ```
14. Reviewers proceed to review the code. If the code is approved, the **Github Admin** will **approve the merge** into `Remote Dev Branch` and **delete the `individual Remote branch`**. If the code needs changes, the team member goes back to step 5.
15. Once the `Remote Dev Branch` has a stable version of code, the **Github Admin** will **merge `Remote Dev Branch` into `Remote Master Branch`** (i.e. **origin master**). **Github Admin** will do this in their `Local Dev Branch`:
    ```
    git pull origin dev
    git push origin master
    ```

### Start of the new work cycle:

1. After the successful **Pull Request**, the team member will start a new coding cycle. For this, first they need to make sure they are in the `Local Master Branch`:
   ```
   git checkout master
   ```
2. Before starting to code, the team member will **ensure they have the most up-to-date version** of the code to work upon:
   ```
   git pull origin dev
   ```
3. They will proceed with **deleting** the current `Local Dev Branch`:
   ```
   git branch -d <team_member_dev>
   ```
4. ...And **create it again** to have a fresh copy of `Local Master Branch`:
   ```
   git checkout -b <team_member_dev>
   ```
5. The team member commences coding. At this point, this step is equivalent to step 5 in "Initial work cycle".

## 19. Provide an overview and description of your Testing process:

## 20. Discuss and analyse requirements related to information system security:

| Percentage (%) | Security Threats         |
| :------------: | ------------------------ |
|       21       | Cross-site scripting     |
|       9        | SQL injection            |
|       11       | Denial-of-service attack |

The table above is an exert from the ["2012 Trends Report: Application Security Risks"](https://www.trustwave.com/downloads/Trustwave_WP_Global_Security_Report_2012.pdf) by the security vendor Cenzic. This table outlines as of 2012, trends in regards to the percentage of different methods exploited by black-hat hackers around the world. Cross-site Scripting (XXS) is the most commonly used web security exploit, accounting for 21% of malignant attacks around the world. Followed by SQL injections. XXS utilizes injecting malicious client-scripts into otherwise benign and trusted websites, that could be sent to an unsuspecting user. Resulting in possible access to a browsers tokens, cookies or other sensitive data. SQL injections on the other hand are based around inserting malicious SQL statements into input fields to be later executed by the underlying SQL database for the same or other reasons as listed above.

Escaping is a means ensuring data an application has received is secure before rendering it for the end user, essentially censoring data that could be interpreted in a malicious way (such as the characters < and > being rendered). Another method on containing the threat of XXS and SQL injections is to sanitize forms to ensure data received can do no harm to users as well as your database by scrubbing the data clean of potentially harmful markup. Input sanitizing, input validation and Escaping are all useful methods implemented to combat against XSS and SQl injections. Although as we have chosen a non-relational,noSQL database like MongoDB, is there is no threat of SQL injections.

"In computing, a denial-of-service attack (DoS attack) is a cyber-attack in which the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily or indefinitely disrupting services of a host connected to the Internet". - Wikipedia thankfully our hosting service DigitalOcean has a cloud Firewall; "network-based, stateful firewall service for your DigitalOcean Droplets. They block all traffic that isn’t expressly permitted by a rule". This firewall helps to distinguish between good and bad actors, limiting the affect of a DDoS attack.

## 21. Discuss methods you will use to protect information and data:

**Authentication/Authorization Requirements** for users/admin; all passwords require a minimum of eight characters containing a minimum of one upper case letter, one number and one special character. Passwords are masked during user entry to prevent shoulder-surfing. Passwords are uniquely salted and hashed when stored in the password database, salting is very effective at preventing successful dictionary attacks, the reason is that is salt concatenated onto the original password then hashed, which helps to secure common passwords by making decoding them very computationally expensive.

**Validations** are performed both client- and server-side. An example of `client-side validations` is attempting to enter text into a "numbers only" field. These can, however, be bypassed, hence a deeper `server-side validation` is required to prevent malicious code being inserted into the database that could cause undesirable results.

**HTTPS**: "The principal motivation for HTTPS is authentication of the accessed website and protection of the privacy and integrity of the exchanged data while in transit" - [Wikipedia](https://en.wikipedia.org/wiki/HTTPS). `<companyName>` thus utilizes HTTPS for the following reasons; the ability securely send 3rd party data sent over via API and to prevent malicious hackers from trying to steal a users cookie an imitate a users session.

## 22. Research what your legal obligations are in relation to handling user data:

<companyName> has never collected private information from the account user unless previously provided with consent. We only collect publicly available social media data from official APIs (Twitter, Facebook, Instagram & YouTube). Data collected from our social platform partners complies with their standard [Platform Policies](https://www.instagram.com/about/legal/terms/api/) and [Terms and Services](https://help.instagram.com/581066165581870).
All data <companyName> collects is stored electronically on the DigitalOcean infrastructure, <dataCentreLocation>. Our application servers and database servers run inside an DigitalOcean Private Cloud. This secure database containing our Users, Visitors and User data is only accessible on our application servers and by approved DigitalOcean Engineers. All data stored by <companyName> is encrypted at rest.
