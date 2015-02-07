<?php

namespace Techversed\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * NavigationGroup
 *
 * @ORM\Table("navigation_groups")
 * @ORM\Entity(repositoryClass="Techversed\MainBundle\Entity\NavigationGroupRepository")
 */
class NavigationGroup
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=55)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="link", type="string", length=255)
     */
    private $link;

    /**
     * @var NavigationGroup
     *
     * @ORM\ManyToOne(targetEntity="Techversed\MainBundle\Entity\NavigationGroup", inversedBy="subGroups")
     * @ORM\JoinColumn(name="parentGroupId", nullable=true)
     */
    protected $parentGroup;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Techversed\MainBundle\Entity\NavigationGroup", mappedBy="parentGroup")
     */
    private $subGroups;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Techversed\MainBundle\Entity\NavigationItem", mappedBy="parentGroup")
     */
    private $items;

    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->subGroups = new ArrayCollection();
    }

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
     * @return NavigationGroup
     */
    public function setParentGroup(NavigationGroup $parentGroup)
    {
        $this->parentGroup = $parentGroup;

        return $this;
    }

    /**
     * Get parentGroup
     *
     * @return integer
     */
    public function getParentGroup()
    {
        return $this->parentGroup;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return NavigationGroup
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

    /**
     * Set link
     *
     * @param string $link
     * @return NavigationGroup
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
     * Get items
     *
     * @return ArrayCollection
     */
    public function getSubGroups()
    {
        return $this->subGroups;
    }

    /**
     * Get items
     *
     * @return ArrayCollection
     */
    public function getItems()
    {
        return $this->items;
    }
}
