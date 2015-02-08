<?php

namespace Techversed\MainBundle\Entity;

use Doctrine\ORM\EntityRepository;

class NavigationGroupRepository extends EntityRepository
{
    public function getParentGroups()
    {
        return $this->createQueryBuilder('n')
            ->where('n.parentGroup IS NULL')
            ->getQuery()
            ->execute()
        ;
    }
}
