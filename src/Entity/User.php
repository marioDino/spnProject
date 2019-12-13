<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientRepository")
 */
class Client
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $username;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $Email;

        /**
     * @ORM\Column(type="string", length=100)
     */
    private $password;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->$username;;
    }

    public function setUsername(string $username): self
    {
        $this->$username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->$Email;
    }

    public function setEmail(string $Email): self
    {
        $this->$Email = $Email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->$Email;
    }

    public function setPassord(string $password): self
    {
        $this->$password = $password;

        return $this;
    }

}
