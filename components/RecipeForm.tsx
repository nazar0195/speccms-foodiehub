"use client";
import React, { useState, FormEvent, ChangeEvent } from 'react';

type RecipeData = {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  images: File[];
  categories: string[];
};

interface RecipeFormProps {
  initialData?: RecipeData;
  onSubmit: (data: RecipeData) => void;
}

const categoriesList = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Vegan',
  'Vegetarian',
  'Gluten-Free',
  'Keto',
  'Paleo'
];

const RecipeForm: React.FC<RecipeFormProps> = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState<string>(initialData?.title || '');
  const [description, setDescription] = useState<string>(initialData?.description || '');
  const [ingredients, setIngredients] = useState<string[]>(initialData?.ingredients || ['']);
  const [steps, setSteps] = useState<string[]>(initialData?.steps || ['']);
  const [images, setImages] = useState<File[]>(initialData?.images || []);
  const [categories, setCategories] = useState<string[]>(initialData?.categories || []);

  const handleAddIngredient = () => setIngredients([...ingredients, '']);
  const handleIngredientChange = (index: number, value: string) => {
    const updated = [...ingredients];
    updated[index] = value;
    setIngredients(updated);
  };
  const handleRemoveIngredient = (index: number) => {
    const updated = ingredients.filter((_, i) => i !== index);
    setIngredients(updated);
  };

  const handleAddStep = () => setSteps([...steps, '']);
  const handleStepChange = (index: number, value: string) => {
    const updated = [...steps];
    updated[index] = value;
    setSteps(updated);
  };
  const handleRemoveStep = (index: number) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map(o => o.value);
    setCategories(selected);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description, ingredients, steps, images, categories });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border rounded px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border rounded px-3 py-2"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Ingredients</label>
        {ingredients.map((ing, i) => (
          <div key={i} className="flex items-center mb-2">
            <input
              type="text"
              value={ing}
              onChange={e => handleIngredientChange(i, e.target.value)}
              className="flex-grow border rounded px-3 py-2"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveIngredient(i)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddIngredient}
          className="mt-2 text-blue-600"
        >
          Add Ingredient
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Steps</label>
        {steps.map((step, i) => (
          <div key={i} className="flex items-center mb-2">
            <textarea
              value={step}
              onChange={e => handleStepChange(i, e.target.value)}
              className="flex-grow border rounded px-3 py-2"
              rows={2}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveStep(i)}
              className="ml-2 text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddStep}
          className="mt-2 text-blue-600"
        >
          Add Step
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Images</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Categories</label>
        <select
          multiple
          value={categories}
          onChange={handleCategoryChange}
          className="w-full border rounded px-3 py-2"
        >
          {categoriesList.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Submit Recipe
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;