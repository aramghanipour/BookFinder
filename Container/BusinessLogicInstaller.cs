using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BookFinder.Core.Repositories;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace BookFinder.Container
{
    public class BusinessLogicInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            //container.Register(Component.For<IAuthorRepository>().ImplementedBy<AuthorRepository>().LifestylePerWebRequest());
        }
    }
}