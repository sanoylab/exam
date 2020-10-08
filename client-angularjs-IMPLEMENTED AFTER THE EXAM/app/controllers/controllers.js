
app.controller('MemberStatesController', function ($scope, memberStatesService) {   
    initPartyMemberStates();
    initPartyNonMemberStates();
    initLatestMemberStates();
    function initPartyMemberStates() {
        $scope.memberStatesPartyMember = memberStatesService.getMemberStatesPartyMembers();
    }
    function initPartyNonMemberStates() {
        $scope.memberStatesNonPartyMember = memberStatesService.getMemberStatesNonPartyMembers();
    }
    function initLatestMemberStates() {
        $scope.latestMemberState = memberStatesService.getLatestMemberState();
    }

});







