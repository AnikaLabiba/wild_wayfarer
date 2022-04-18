import React from 'react';

const Blogs = () => {
    return (
        <div className='container mb-5'>
            <div className='mt-5 shadow-sm p-3'>
                <h4>Authorization vs Authentication</h4>
                <p><b>Authentication:</b> authentication of a website or application is to identify or validate the identity of a user. User need to say and claim that who they are. Registering with email and password is an example of Authentication.</p>
                <p><b>Authorization:</b> authorization is a security system of an application to give extra power to the user. When user is given permission to access a specific resource or function that is the authorization. Example can be giving someone permission to download a particular file on a server or providing individual users with administrative access to an application.</p>
            </div>
            <div className='mt-5 shadow-sm p-3'>
                <h4>Why using Firebase and it's alternative</h4>
                <p>
                    Google Firebase offers many tools that are essential for developing web and mobile apps backend. It reduces development workload and time, besides it is simple, lightweight and industrially recognized. And it's a perfect prototyping tool. At a time it provides various types of function such as realtime database, hosting, analytics, authentication and many more.
                </p>
                <p>Alternative of Firebase: <ul>
                    <li>Back4App</li>
                    <li>Parse</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>NativeScript</li>
                    <li>SashiDo</li>
                    <li>LoopBack</li>
                    <li>Flutter</li>
                </ul></p>
            </div>
            <div className='mt-5 shadow-sm p-3'>
                <h4>Firebase Features except Authentication</h4>
                <p>
                    <li>
                        Analytics – Google Analytics presents data about user behavior in iOS and Android apps, enabling better decision-making about improving performance and app marketing.
                    </li>
                    <li>
                        Cloud messaging – Firebase Cloud Messaging (FCM) is a   cross-platform and free messaging tool that is helpful for receiving and delivering messages on iOS, Android and the web.
                    </li>
                    <li>
                        Realtime database – Firebase Realtime Database is a cloud-hosted NoSQL database that stores data and synced between users in real time and even in offline.
                    </li>
                    <li>
                        Crashlytics – Firebase Crashlytics is a real-time crash reporter that helps developers track and fix stability issues and troubleshooting crashes that reduce the quality of the apps.
                    </li>
                    <li>
                        Performance – Firebase Performance Monitoring service helps developers to monitor the performance of iOS and Android apps and to determine where and when the performance should be improved.
                    </li>
                    <li>
                        Test lab – Firebase Test Lab is a cloud-based app-testing infrastructure. That allows developers to test their iOS or Android apps across a variety of devices and device configurations. They can see the results, including videos, screenshots and logs, in the Firebase console.
                    </li>
                </p>
            </div>
        </div>
    );
};

export default Blogs;