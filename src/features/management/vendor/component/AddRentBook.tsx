"use client"

import { Button } from "@/shared-ui/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared-ui/ui/select"




export default function BookFormDesignOnly() {
  return (
    <div className="w-full min-h-screen bg-background py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Add Book to Inventory</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Fill in the details to add a new book to your rental collection
          </p>
        </div>

        <form className="space-y-4">

          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="text-xs sm:text-sm">Title *</label>
              <input
                type="text"
                placeholder="Book title"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 
                text-xs sm:text-sm shadow-xs placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm">Author *</label>
              <input
                type="text"
                placeholder="Author name"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 
                text-xs sm:text-sm shadow-xs placeholder:text-muted-foreground"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm">Publisher *</label>
              <input
                type="text"
                placeholder="Publisher"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 
                text-xs sm:text-sm shadow-xs placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="text-xs sm:text-sm">Category *</label>
              <Select>
                <SelectTrigger className="h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="mystery">Mystery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs sm:text-sm">Language *</label>
              <Select>
                <SelectTrigger className="h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs sm:text-sm">Status *</label>
              <Select>
                <SelectTrigger className="h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="rented">Rented</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="text-xs sm:text-sm">Actual Price *</label>
              <input
                type="number"
                placeholder="0.00"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm">Rent Price *</label>
              <input
                type="number"
                placeholder="0.00"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm">Stock *</label>
              <input
                type="number"
                placeholder="0"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="text-xs sm:text-sm">Rent Date *</label>
              <input
                type="date"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm">Duration *</label>
              <Select>
                <SelectTrigger className="h-8 text-xs sm:text-sm">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 Days</SelectItem>
                  <SelectItem value="14">14 Days</SelectItem>
                  <SelectItem value="30">30 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs sm:text-sm">Avg Rating</label>
              <input
                type="number"
                placeholder="0 - 5"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs sm:text-sm">Rating Count</label>
              <input
                type="number"
                placeholder="0"
                className="flex h-8 w-full rounded-md border border-input bg-transparent px-2.5 py-1 text-xs"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-xs sm:text-sm">Description *</label>
            <textarea
              rows={3}
              placeholder="Enter book description..."
              className="flex w-full rounded-md border border-input bg-transparent px-2.5 py-1.5 
              text-xs sm:text-sm shadow-xs resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button className="w-full sm:w-auto text-xs sm:text-sm h-8">Save Book</Button>
            <Button variant="outline" className="w-full sm:w-auto text-xs sm:text-sm h-8">
              Clear
            </Button>
          </div>

        </form>
      </div>
    </div>
  )
}
