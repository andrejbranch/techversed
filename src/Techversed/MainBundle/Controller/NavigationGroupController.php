<?php

namespace Techversed\MainBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

class NavigationGroupController extends Controller
{
    public function queryAction()
    {
        $navigationGroups = $this->getParentNavigationsGroups();

        return new Response(
            json_encode($navigationGroups),
            Response::HTTP_OK,
            array('content-type' => 'application/json')
        );
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
