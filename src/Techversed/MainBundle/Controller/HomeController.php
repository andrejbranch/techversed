<?php

namespace Techversed\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function indexAction()
    {
        return $this->render('TechversedMainBundle:Home:index.html.php');
    }

    private function getParentNavigationsGroups()
    {
        return $this->getNavigationGroupRepository()->getParentGroups();
    }

    private function getNavigationGroupRepository()
    {
        return $this->getDoctrine()->getManager()->getRepository('Techversed\MainBundle\Entity\NavigationGroup');
    }
}
