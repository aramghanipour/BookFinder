using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Mvc;
using BookFinder.Core.Repositories;
using Castle.MicroKernel.Registration;
using Castle.MicroKernel.SubSystems.Configuration;
using Castle.Windsor;

namespace BookFinder.Container
{
    public class ControllersInstaller : IWindsorInstaller
    {
        public void Install(IWindsorContainer container, IConfigurationStore store)
        {
            //MVC
            //container.Register(Classes.FromAssemblyInThisApplication()
            //    .Pick().If(t => t.Name.EndsWith("Controller"))
            //    .Configure(configurer => configurer.Named(configurer.Implementation.Name))
            //    .LifestylePerWebRequest());
            
            //MVC
            container.Register(Classes.FromThisAssembly().
                    BasedOn<IController>().
                    If(c => c.Name.EndsWith("Controller")).
                    LifestyleTransient());

            ////Web API
            //container.Register(Classes.FromAssemblyInThisApplication().
            //    BasedOn<IHttpController>().
            //    If(c => c.Name.EndsWith("Controller")).
            //    LifestyleTransient());
        }
    }
}