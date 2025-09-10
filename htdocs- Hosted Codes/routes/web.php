<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SalaryController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UnitTypeController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'pageTitle' => 'Home',
    ]);
})->name('home');

// Contact
Route::post('contacts', [ContactController::class, 'store'])->name('contacts.store');

Route::get('logs', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index']);

Route::middleware('auth')->group(function () {
    // Dashboard
    Route::get('/dashboard', DashboardController::class)->name('dashboard');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/image', [ProfileController::class, 'updateImage'])->name('profile.image');
    Route::get('/users', [UserController::class, 'index'])->name('users.index');

    Route::apiResource('categories', CategoryController::class)->except(['destroy']);
    Route::post('categories/{category}/delete', [CategoryController::class, 'destroy'])->name('categories.destroy');
    Route::apiResource('unit-types', UnitTypeController::class);
    Route::apiResource('suppliers', SupplierController::class);
    Route::resource('products', ProductController::class);
    Route::apiResource('expenses', ExpenseController::class);
    Route::apiResource('customers', CustomerController::class);
    Route::apiResource('employees', EmployeeController::class);
    // Safe delete routes using POST to avoid DELETE on hosting
    Route::post('unit-types/{unit_type}/delete', [UnitTypeController::class, 'destroy'])->name('unit-types.destroy');
    Route::post('suppliers/{supplier}/delete', [SupplierController::class, 'destroy'])->name('suppliers.destroy');
    Route::post('products/{product}/delete', [ProductController::class, 'destroy'])->name('products.destroy');
    Route::post('expenses/{expense}/delete', [ExpenseController::class, 'destroy'])->name('expenses.destroy');
    Route::post('employees/{employee}/delete', [EmployeeController::class, 'destroy'])->name('employees.destroy');
    Route::post('customers/{customer}/delete', [CustomerController::class, 'destroy'])->name('customers.destroy');

    Route::apiResource('salaries', SalaryController::class);

    // Order
    Route::apiResource('orders', OrderController::class);
    Route::put('orders/{order}/settle', [OrderController::class, 'settle'])->name('orders.settle');
    Route::put('orders/{order}/pay', [OrderController::class, 'pay'])->name('orders.pay');
    // Safe POST fallbacks for hosting
    Route::post('orders/{order}/settle', [OrderController::class, 'settle'])->name('orders.settle');
    Route::post('orders/{order}/pay', [OrderController::class, 'pay'])->name('orders.pay');

    // Transaction
    Route::get('transactions', [TransactionController::class, 'index'])->name('transactions.index');

    // Carts
    Route::get('pos', [CartController::class, 'index'])->name('carts.index');
    Route::post('carts/{productId}', [CartController::class, 'addToCart'])->name('carts.store');
    Route::post('carts/{cart}', [CartController::class, 'updateQuantity'])->name('carts.update');
    Route::post('carts/{cart}/increment', [CartController::class, 'incrementQuantity'])->name('carts.increment');
    Route::post('carts/{cart}/decrement', [CartController::class, 'decrementQuantity'])->name('carts.decrement');
    Route::post('carts/{cart}/delete', [CartController::class, 'delete'])->name('carts.delete');
    Route::post('carts/delete/all', [CartController::class, 'deleteForUser'])->name('carts.delete.all');

    // Settings
    Route::put('settings', [SettingController::class, 'update'])->name('settings.update');
});

require __DIR__ . '/auth.php';