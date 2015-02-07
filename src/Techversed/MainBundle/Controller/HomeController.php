<?php

namespace Techversed\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function indexAction()
    {
        return $this->render('TechversedMainBundle:Home:index.html.twig');
    }
}
