app.service("memberStatesService", function () {
  this.getMemberStates = function () {
    return memberStates;
  };

  this.getMemberStatesPartyMembers = function () {
    return memberStates.filter((member) => member.isParty == true);
  };
  this.getMemberStatesNonPartyMembers = function () {
    return memberStates.filter((member) => member.isParty == false);
  };
  this.getLatestMemberState = function () {
    let latest = memberStates.reduce(function (r, a) {
      return r.date > a.date ? r : a;
    });
    return latest;
  };

  var memberStates = [
    {
      id: 1,
      countryName: "Afghanistan",
      date: "2002-12-18",
      isParty: true,
    },
    {
      id: 2,
      countryName: "Albania",
      date: "1994-04-05",
      isParty: false,
    },
    {
      id: 3,
      countryName: "Algeria",
      date: "1995-11-12",
      isParty: true,
    },
    {
      id: 4,
      countryName: "Andorra",
      date: "2015-05-05",
      isParty: false,
    },
  ];
});
