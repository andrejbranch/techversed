<?php

namespace Techversed\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * NavigationItem
 *
 * @ORM\Table("navigation_items")
 * @ORM\Entity(repositoryClass="Techversed\MainBundle\Entity\NavigationItemRepository")
 */
class NavigationItem
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var NavigationGroup
     *
     * @ORM\ManyToOne(targetEntity="Techversed\MainBundle\Entity\NavigationGroup", inversedBy="items")
     * @ORM\JoinColumn(name="parentGroupId", nullable=true)
     */
    protected $parentGroup;

    /**
     * @var string
     *
     * @ORM\Column(name="link", type="string", length=255)
     */
    private $link;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=55)
     */
    private $name;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set parentGroup
     *
     * @param NavigationGroup $parentGroup
     * @return NavigationItem
     */
    public function setParentGroup(NavigationGroup $parentGroup)
    {
        $this->parentGroup = $parentGroup;

        return $this;
    }

    /**
     * Get parentGroup
     *
     * @return \stdClass
     */
    public function getParentGroup()
    {
        return $this->parentGroup;
    }

    /**
     * Set link
     *
     * @param string $link
     * @return NavigationItem
     */
    public function setLink($link)
    {
        $this->link = $link;

        return $this;
    }

    /**
     * Get link
     *
     * @return string
     */
    public function getLink()
    {
        return $this->link;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return NavigationItem
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
}
