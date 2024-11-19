document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('click', (event) => {
      // Get the folder name and content
      const folderId = event.currentTarget.id;
      const folderTitle = event.currentTarget.querySelector('span').innerText;
      
      // Show the folder GUI
      document.getElementById('folder-gui').style.display = 'flex';
      document.getElementById('folder-title').innerText = folderTitle;

      let folderBodyContent = '';
      switch (folderId) {
          case 'about':
              folderBodyContent = `

                <p>Hello, I'm Jimwel! Aspiring Full Stack Developer</p>
                <p>I’m an aspiring Full Stack Developer with a strong interest in building dynamic web applications. I’ve honed my skills in front-end development using HTML, CSS, and JavaScript, and I’m passionate about creating seamless, interactive user interfaces. On the back-end, I have experience working with SQL databases and server-side technologies like Node.js. I’m constantly learning and exploring new tools and frameworks to grow my skill set. My goal is to continue building projects that challenge me while contributing to meaningful development teams.</p>
                <h3>Current Focus</h3>
                <ul>
                  <li>Web Development: Creating responsive and engaging websites.</li>
                  <li>Programming: Passionate about coding and problem-solving.</li>
                  <li>UI/UX Design: Designing intuitive user experiences.</li>
                  <li>Collaboration: Emphasizing teamwork to achieve great results.</li>
                </ul>
                <h3>My Mission</h3>
                <p>My mission is to empower businesses and individuals through technology, transforming innovative ideas into reality to create positive impacts in people's lives.</p>
                <h3>Fun Facts</h3>
                <ul>
                  <li>I enjoy going to the gym to stay fit and healthy.</li>
                  <li>Cooking is one of my favorite hobbies; I love trying new recipes.</li>
                  <li>I’m passionate about entrepreneurship and always looking for new business opportunities.</li>
                </ul>
              `;
              break;
          case 'project':
              folderBodyContent = `

                <div class="project-images">
                    <div class="project-item">
                        <img src="img/project1.png" alt="Don Bosco Information" class="project-img">
                        <h3>Don Bosco Information</h3>
                    </div>
                    <div class="project-item">
                        <img src="img/project2.png" alt="Bake Shop Website" class="project-img">
                        <h3>Bake Shop Website</h3>
                    </div>
                    <div class="project-item">
                        <img src="img/project3.png" alt="Honda Click 160" class="project-img">
                        <h3>Honda Click 160</h3>
                    </div>
                    <div class="project-item">
                        <img src="img/project4.png" alt="RFID Attendance System" class="project-img">
                        <h3>RFID Attendance System</h3>
                    </div>
                </div>
                <p>This section showcases various projects I’ve worked on, ranging from web development to mobile apps. Feel free to explore these projects and see the work I’ve done.</p>
              `;
              break;
          case 'skills':
              folderBodyContent = `

                <p><strong>HTML</strong></p>
                <p>Experienced in creating structured web pages with HTML5.</p>
                <p><strong>CSS</strong></p>
                <p>Proficient in styling web pages with CSS3, including responsive design and animations.</p>
                <p><strong>JavaScript</strong></p>
                <p>Skilled in JavaScript for creating dynamic and interactive web applications.</p>
                <p><strong>PHP</strong></p>
                <p>Experienced in server-side development using PHP for dynamic web content.</p>
                <p><strong>React.js</strong></p>
                <p>Currently learning React.js for building modern, interactive web interfaces.</p>
              `;
              break;
          case 'education':
              folderBodyContent = `

                <p><strong>Don Bosco College Canlubang</strong><br> Bachelor’s Degree in Information Technology (Expected Graduation: 2025)</p>
                <p>My academic journey in programming spans several years, starting with foundational programming languages and evolving into advanced topics such as mobile development and web systems.</p>
                
                <p><strong>Asian Computer College</strong><br> Kindergarten to Grade 10</p>
                <p>At Asian Computer College, I began my academic journey, laying the foundation for my interest in technology.</p>

                <p><strong>University of Perpetual Help Calamba Campus</strong><br> Grade 11 to 12, ICT Course</p>
                <p>During my time at Perpetual, I pursued an ICT-focused curriculum, which enhanced my understanding of technology and further developed my skills in Information Technology.</p>
              `;
              break;
          default:
              folderBodyContent = 'No content available.';
      }

      // Set the folder content dynamically
      document.getElementById('folder-body').innerHTML = folderBodyContent;
  });
});