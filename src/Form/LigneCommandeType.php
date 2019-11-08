<?php

namespace App\Form;

use App\Entity\LigneCommande;
use App\Entity\Produit;
use App\Entity\Commande;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class LigneCommandeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('qteComm')
            ->add('commandes', EntityType::class,[
                'class' => Commande::class,
                'choice_label'=>'id'
             ])
            ->add('produits', EntityType::class,[
                'class' => Produit::class,
                'choice_label'=>'libelle'
             ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LigneCommande::class,
        ]);
    }
}
