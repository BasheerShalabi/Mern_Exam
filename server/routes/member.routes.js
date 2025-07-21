const MemberController = require('../controllers/member.controller');



module.exports = app => {

    app.get('/api/members/allmembers', MemberController.findAllMembers);

    app.get('/api/members/:id', MemberController.findOneSingleMember);

    app.patch('/api/members/:id', MemberController.updateExistingMember);
    
    app.post('/api/members', MemberController.createNewMember);

    app.delete('/api/members/:id', MemberController.deleteAnExistingMember);
    
}


