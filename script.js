document.getElementById('showInfoBtn').addEventListener('click', function() {
    var profileSection = document.getElementById('profileSection');
    
    profileSection.innerHTML = 
        '<h2>Name: Prince Nasamu Alhassan</h2>' +
        '<h4>Student ID: 22458053</h4>' +
        '<p><strong>Course:</strong> Mathematical Science</p>' +
        '<p><strong>Bio</strong> <br>A Mathematical Science student at the University of Ghana with a focus on Computer Science and data science. Passionate about technology, problem-solving, and creating real impact for the community in Bawku.</p>' +
        '<button id="showPictureBtn">Show Profile Picture</button>';
    
    document.getElementById('showPictureBtn').addEventListener('click', function() {
        var profileSection = document.getElementById('profileSection');
        profileSection.innerHTML += '<img src="../ProfilePic.jpg" alt="Profile Picture">';
    });
});