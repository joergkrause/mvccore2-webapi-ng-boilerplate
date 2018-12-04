using AutoMapper;
using JoergIsAGeek.Workshop.Enterprise.DataTransferObjects.Authentication;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;

namespace JoergIsAGeek.Workshop.UnitTest.BusinessLayer {
  [TestClass]
  public class MappingTests {

    IMapper mapper;

    [TestInitialize]
    public void Init() {      
      var config = new MapperConfiguration(conf => {
        conf.AllowNullCollections = true;
        conf.CreateMap<ClaimDto, Claim>()
          .ForMember(c => c.Type, opt => opt.MapFrom(o => o.Type))
          .ForMember(c => c.Value, opt => {
            opt.UseValue<string>("xx");
          })
        .ForMember(c => c.Properties, opt => opt.Ignore())
        .ForMember(c => c.Subject, opt => opt.Ignore());
      });
      mapper = config.CreateMapper();
    }


    [TestMethod]
    public void TestMethod1() {
      var dtos = new List<ClaimDto>() {
        new ClaimDto { Type = "api_access", Value = null }
      };
      var mapped = dtos.Select(c => mapper.Map<Claim>(c));
      Assert.AreEqual(mapped.Count(), dtos.Count());
      Assert.AreEqual(mapped.First().Type, "api_access");
      //Assert.IsNull(mapped.First().Value);
    }
  }
}
